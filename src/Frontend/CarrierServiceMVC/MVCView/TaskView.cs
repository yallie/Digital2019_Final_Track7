﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
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
            //this.tasksListView.Columns.Add("Выполнено", 50,  HorizontalAlignment.Left);
            
            this.tasksListView.Items.Clear();
        }

        public void AddTaskToListView(CarrierTask carrierTask)
        {
            ListViewItem parent;
            parent = this.tasksListView.Items.Add(carrierTask.ID.ToString());
            parent.SubItems.Add(carrierTask.TaskName);            
        }

        public string GetIdOfSelectedUserInGrid()
        {
            if (this.tasksListView.SelectedItems.Count > 0)
                return this.tasksListView.SelectedItems[0].Text;
            else
                return "";
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
            detailsRichTextBox.Text = task.TaskDetails;
        }

        #endregion
    }
}