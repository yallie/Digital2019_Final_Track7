using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

using System.Collections;
using  WinFormMVC.Model;
using  WinFormMVC.View;
using  WinFormMVC.Controller;
using System.IO;
using System.Reflection;

namespace UseMVCApplication
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            CarrierTasksView view = new CarrierTasksView();
            view.Visible = false;

            // Add some dummy data

            string binDirectory = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            string parentPath = Path.Combine(binDirectory, @"..\..");
            string resourcesDirectory = Path.Combine(parentPath, "Resources");

            var mapPath1 = Path.Combine(resourcesDirectory, "map1.jpg");
            var mapPath2 = Path.Combine(resourcesDirectory, "map2.jpg");
                        
            IList tasks = new ArrayList();
            tasks.Add(new CarrierTask(1, "Груз 235", "Define a custom class which is used to store the checked state of checkboxes. The reason why defining a special class for storing checked state is that we need to make each") {MapPicturePath = mapPath1 });
            tasks.Add(new CarrierTask(2, "Груз 84", "A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device. Device:") { MapPicturePath = mapPath1 });
            tasks.Add(new CarrierTask(3, "Груз 98", "Лучшие сообщения, которые я видел на самом деле объяснение MVC и почему система MVC построена так, как она есть, является Создайте свою собственную CAB от Джереми Д. Миллера. После ") { MapPicturePath = mapPath1 });
            tasks.Add(new CarrierTask(4, "Груз 48", "Я считаю, что приложения настолько отличаются друг от друга, и наше понимание того, как приложения должны быть написаны, по-прежнему очень ограничено. Прошлые приложения") { MapPicturePath = mapPath2 });
            tasks.Add(new CarrierTask(5, "Комплект 45", "обработки текста с форматированием. RichTextBox Управления следит за недопущением TextBox делает элемент управления, но можно также отображать шрифты, цвета и ссылки; ") { MapPicturePath = mapPath1 });
            tasks.Add(new CarrierTask(6, "Груз 4", "Microsoft Word. Как TextBox элемента управления, RichTextBox элемент управления может отображать полосы прокрутки; но в отличие от TextBox элемента управления, он по умолчанию") { MapPicturePath = mapPath2 });
            tasks.Add(new CarrierTask(7, "Груз 2"));
            tasks.Add(new CarrierTask(8, "Груз 6"));
            tasks.Add(new CarrierTask(9, "Груз 45"));

            var testDetailsTask = new CarrierTask(10, "Груз тестовый", "быстрорастущую функциональность начинается постоянная правка багов. Сначала это были часы, потом недели, сейчас я знаю, что и месяцы не предел. Когда это занимало часы или дни, ошибки закрывались, все более – менее текло. Но стоило начать переоткрывать ошибки – начинался ад. Отдел тестирования постоянно ругается, разработчики постоянно правят ошибки и делают новые в разрабатываемом функционале. Все чаще приходит обратная связь, от реальных пользователей, полная негатива. А функционал рос и рос, я искал методы и подходы, как можно себе упростить жизнь. При этом меня давно посещала идея, задействовать при разработке пользовательского интерфейса ");
            tasks.Add(testDetailsTask);

            var carrierName = "Иван Васильевич Разносилопогрузов";

            CarrierTaskController controller = new CarrierTaskController(view, carrierName, tasks);
            controller.LoadView();
            view.ShowDialog();
        }
    }
}
