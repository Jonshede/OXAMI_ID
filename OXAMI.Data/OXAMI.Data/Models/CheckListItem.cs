using System;
using System.Collections.Generic;
using System.Text;

namespace OXAMI.Data.Models
{
    public class CheckListItem
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public string Category { get; set; }
        public bool isChecked { get; set; }
    }
}
