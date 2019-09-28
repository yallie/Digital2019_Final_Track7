using System;
using System.Collections;
using WinFormMVC.Model;

namespace WinFormMVC.Controller
{
    public class CarrierTaskController
    {
        ITasksView _view;
        IList      _tasks;
        string _carrierName;
        CarrierTask       _selectedUser;

        public CarrierTaskController(ITasksView view, string carrierName, IList users)
        {
            _view = view;
            _tasks = users;
            _carrierName = carrierName;
            view.SetController(this);
        }

        public IList Users
        {
           get { return ArrayList.ReadOnly(_tasks); }
        }
        
        public void LoadView()
        {
            _view.CarrierName = _carrierName;

            _view.ClearGrid();
            foreach (CarrierTask task in _tasks)
                _view.AddTaskToListView(task);

            _view.SetSelectedUserInGrid((CarrierTask)_tasks[0]);

        }

        public void SelectedUserChanged(int selectedUserId)
        {
            foreach (CarrierTask task in this._tasks)
            {
                if (task.ID == selectedUserId)
                {
                    _selectedUser = task;
                    //updateViewDetailValues(task);
                    _view.SetSelectedUserInGrid(task);
                    _view.ShowTaskDetails(task);
                    //this._view.CanModifyID = false;
                    break;
                }
            }
        }

        public void CompleteTaskWithId(int id)
        {   
            CarrierTask taskToRemove = null;

            if (id > 0)
            {
                foreach (CarrierTask carrierTask in _tasks)
                {
                    if (carrierTask.ID == id)
                    {
                        taskToRemove = carrierTask;
                        break;
                    }
                }

                if (taskToRemove != null)
                {
                    int newSelectedIndex = _tasks.IndexOf(taskToRemove);
                    _tasks.Remove(taskToRemove);
                    _view.RemoveTaskFromListView(taskToRemove);

                    if (newSelectedIndex > -1 && newSelectedIndex < _tasks.Count)
                    {
                        this._view.SetSelectedUserInGrid((CarrierTask)_tasks[newSelectedIndex]);
                    }
                }
            }
         

        }
    }
}
