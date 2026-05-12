using System;
using System.Collections.Generic;
using System.Text;

namespace OXAMI.Data
{
    public class ActionPattern
    {
        public int ID { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string Description { get ; set; }
        public List<string> Steps { get; set; }

    }
}
