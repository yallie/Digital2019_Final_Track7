using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

using System.Collections;
using  WinFormMVC.Model;
using  WinFormMVC.View;
using  WinFormMVC.Controller;


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
            IList tasks = new ArrayList();
            tasks.Add(new CarrierTask(1, "Груз 235", "Define a custom class which is used to store the checked state of checkboxes. The reason why defining a special class for storing checked state is that we need to make each checkbox correspond with its specific item, and thus enables each checkbox with its unique meaning. (Since two checkboxes on the same line have the opposite meaning, so we only need to define one object list. We can the checked state of the other checkbox by getting the opposite value"));
            tasks.Add(new CarrierTask(2, "Груз 84", "A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device. Device: Firefox on Windows Verification code: 587238 If you did not attempt to sign in to your account, your password may be compromised.Visito create a new, strong password for your GitHub account."));
            tasks.Add(new CarrierTask(3, "Груз 98", "Лучшие сообщения, которые я видел на самом деле объяснение MVC и почему система MVC построена так, как она есть, является Создайте свою собственную CAB от Джереми Д. Миллера. После работы, хотя вы должны уметь лучше понимать свои варианты. Следует также рассмотреть руководство Microsoft Smart Client (CAB/Microsoft Composite Application Block). Он немного сложный, но он может хорошо работать для приложений, которые хорошо подходят."));
            tasks.Add(new CarrierTask(4, "Груз 48", "Я считаю, что приложения настолько отличаются друг от друга, и наше понимание того, как приложения должны быть написаны, по-прежнему очень ограничено. Прошлые приложения Windows Forms, над которыми я работал, были настолько отличными друг от друга. Некоторые из различий в дизайне, которые я видел, (включая большинство комбинаций):"));
            tasks.Add(new CarrierTask(5, "Комплект 45", "обработки текста с форматированием. RichTextBox Управления следит за недопущением TextBox делает элемент управления, но можно также отображать шрифты, цвета и ссылки; загрузить текст и встроенные изображения из файла; действия отмены и повтора операций; изменения и находить указанные символы. RichTextBox Управления обычно используется для работы с текстом и отображения функций, как для текстовых редакторов, таких как Microsoft Word. Как TextBox элемента управления, "));
            tasks.Add(new CarrierTask(6, "Груз 4", "Microsoft Word. Как TextBox элемента управления, RichTextBox элемент управления может отображать полосы прокрутки; но в отличие от TextBox элемента управления, он по умолчанию отображаются горизонтальные и вертикальные полосы прокрутки и имеет дополнительные параметры полосы прокрутки."));
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
