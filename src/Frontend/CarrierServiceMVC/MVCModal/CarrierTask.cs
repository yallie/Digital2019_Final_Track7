using System;

namespace WinFormMVC.Model
{
    public class CarrierTask
    {
        private string _taskName;
        public string TaskName 
        {
            get { return _taskName; } 
            set 
            { 
                 if (value.Length > 50)
                     Console.WriteLine("Error! TaskName must be less than 51 characters!"); 
                 else
                     _taskName = value; 
            } 
        }

        private int _id;
        public int ID
        {
            get { return _id; }
            set
            {
                if (value < 0)
                    Console.WriteLine("Error! ID must be more than 0!");
                else
                    _id = value;
            }
        }

        private bool _taskDone;
        public bool TaskDone
        {
            get { return _taskDone; }
            set { _taskDone = value; }
        }

        private string _taskDetails;
        public string TaskDetails
        {
            get { return _taskDetails; }
            set { _taskDetails = value; }
        }


        public CarrierTask(int id, string firstname)
        {
            TaskName   = firstname;
            ID          = id;
            TaskDone = false;
            TaskDetails = "";
        }

        public CarrierTask(int id, string firstname, string details)
        {
            TaskName = firstname;
            ID = id;
            TaskDone = false;
            TaskDetails = details;
        }
    } 

}
