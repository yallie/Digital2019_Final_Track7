using System;
using WinFormMVC.Model;

namespace WinFormMVC.Controller
{
    public interface ITasksView
    {
        string CarrierName { set; }

        void SetController(CarrierTaskController controller);
        void ClearGrid();
        void AddTaskToListView(CarrierTask user);
        void SetSelectedUserInGrid(CarrierTask user);
        void ShowTaskDetails(CarrierTask task);     
        void RemoveTaskFromListView(CarrierTask taskToRemove);
    }
}
