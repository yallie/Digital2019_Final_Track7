using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

using WinFormMVC.Controller;
using WinFormMVC.Model;

namespace WinFormMVC.View
{
    public partial class CarrierTasksView : Form, ITasksView
    {
        CarrierTaskController _controller;

        public CarrierTasksView()
        {
            InitializeComponent();
        }

        public string CarrierName
        {
            set { carrierNameLabel.Text = value; }
        }

        #region Events raised  back to controller


        private void grdUsers_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (this.tasksListView.SelectedItems.Count > 0)
                this._controller.SelectedUserChanged(int.Parse(tasksListView.SelectedItems[0].Text));

        }

        #endregion

        #region ICatalogView implementation

        public void SetController(CarrierTaskController controller)
        {
            _controller = controller;
        }

        public void ClearGrid()
        {
            // Define columns in grid
            this.tasksListView.Columns.Clear();

            this.tasksListView.Columns.Add("Номер");
            this.tasksListView.Columns.Add("Задача", -1, HorizontalAlignment.Left);
            this.tasksListView.Columns.Add("Детали задачи", -1, HorizontalAlignment.Left);            

            this.tasksListView.Items.Clear();
        }

        public void AddTaskToListView(CarrierTask carrierTask)
        {
            ListViewItem parent;
            parent = this.tasksListView.Items.Add(carrierTask.ID.ToString());
            parent.SubItems.Add(carrierTask.TaskName);            
            parent.SubItems.Add(carrierTask.TaskDetails);            
        }

        private int GetIdOfSelectedUserInGrid()
        {
            if (tasksListView.SelectedItems.Count > 0)
                return int.Parse(tasksListView.SelectedItems[0].Text);
            else
                return 0;
        }

        public void SetSelectedUserInGrid(CarrierTask usr)
        {
            foreach (ListViewItem row in this.tasksListView.Items)
            {
                if (row.Text == usr.ID.ToString())
                {
                    row.Selected = true;
                }
            }
        }

        public void ShowTaskDetails(CarrierTask task)
        {
            if (string.IsNullOrEmpty(task.MapPicturePath))
                return;
            mapPictureBox.Image = Image.FromFile(task.MapPicturePath);
        }

        #endregion

        private void Button1_Click(object sender, EventArgs e)
        {
            var selectedTaskId = GetIdOfSelectedUserInGrid();
            _controller.CompleteTaskWithId(selectedTaskId); 
        }

        public void RemoveTaskFromListView(CarrierTask taskToRemove)
        {
            ListViewItem rowToRemove = null;

            foreach (ListViewItem row in tasksListView.Items)
            {
                if (row.Text == taskToRemove.ID.ToString())
                {
                    rowToRemove = row;
                }
            }

            if (rowToRemove != null)
            {
                tasksListView.Items.Remove(rowToRemove);
                tasksListView.Focus();
            }

        }
    }
}
