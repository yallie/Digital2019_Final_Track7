namespace WinFormMVC.View
{
    partial class CarrierTasksView 
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tasksListView = new System.Windows.Forms.ListView();
            this.detailsRichTextBox = new System.Windows.Forms.RichTextBox();
            this.carrierNameLabel = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // tasksListView
            // 
            this.tasksListView.CheckBoxes = true;
            this.tasksListView.FullRowSelect = true;
            this.tasksListView.GridLines = true;
            this.tasksListView.Location = new System.Drawing.Point(12, 40);
            this.tasksListView.Name = "tasksListView";
            this.tasksListView.Size = new System.Drawing.Size(350, 285);
            this.tasksListView.Sorting = System.Windows.Forms.SortOrder.Ascending;
            this.tasksListView.TabIndex = 35;
            this.tasksListView.UseCompatibleStateImageBehavior = false;
            this.tasksListView.View = System.Windows.Forms.View.Details;
            this.tasksListView.SelectedIndexChanged += new System.EventHandler(this.grdUsers_SelectedIndexChanged);
            // 
            // detailsRichTextBox
            // 
            this.detailsRichTextBox.Location = new System.Drawing.Point(374, 40);
            this.detailsRichTextBox.Name = "detailsRichTextBox";
            this.detailsRichTextBox.Size = new System.Drawing.Size(350, 285);
            this.detailsRichTextBox.TabIndex = 36;
            this.detailsRichTextBox.Text = "";
            // 
            // carrierNameLabel
            // 
            this.carrierNameLabel.AutoSize = true;
            this.carrierNameLabel.Location = new System.Drawing.Point(12, 13);
            this.carrierNameLabel.Name = "carrierNameLabel";
            this.carrierNameLabel.Size = new System.Drawing.Size(90, 13);
            this.carrierNameLabel.TabIndex = 37;
            this.carrierNameLabel.Text = "carrierNameLabel";
            // 
            // UsersView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(736, 338);
            this.Controls.Add(this.carrierNameLabel);
            this.Controls.Add(this.detailsRichTextBox);
            this.Controls.Add(this.tasksListView);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "UsersView";
            this.Text = "Сервис для работы грузчиков";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        internal System.Windows.Forms.ListView tasksListView;
        private System.Windows.Forms.RichTextBox detailsRichTextBox;
        private System.Windows.Forms.Label carrierNameLabel;
    }
}

