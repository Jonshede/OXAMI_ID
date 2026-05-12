using System;
using System.Collections.Generic;
using System.Text;

namespace OXAMI.Data
{
    public class ChecklistItem
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public string Category { get; set; }
        public bool isChecked { get; set; }
    }
}
