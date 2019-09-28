using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;

namespace Track7
{
	public class MainModule : NancyModule
	{
		public MainModule() : base("/api/v1")
		{
			Get("/", _ => "Hello World!");

			Get("/tasks", _ => "Tasks");
		}
	}
}
