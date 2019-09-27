using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy.Hosting.Self;

namespace Track7
{
	class Program
	{
		static void Main(string[] args)
		{
			// initialize an instance of NancyHost (found in the Nancy.Hosting.Self package)
			var host = new NancyHost(new Uri("http://localhost:37000"));
			host.Start(); // start hosting

			Console.ReadKey();
			host.Stop();  // stop hosting
		}
	}
}
