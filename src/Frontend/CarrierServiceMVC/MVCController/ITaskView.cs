using System;
using WinFormMVC.Model;

namespace WinFormMVC.Controller
{
    public interface ITasksView
    {
        void SetController(CarrierTaskController controller);
        void ClearGrid();
        void AddTaskToListView(CarrierTask user);
        
        string GetIdOfSelectedUserInGrid();
        void SetSelectedUserInGrid(CarrierTask user);
        void ShowTaskDetails(CarrierTask task);

        string CarrierName { set; }        
    }
}
