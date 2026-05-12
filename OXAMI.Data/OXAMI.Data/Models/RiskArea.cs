using System;
using System.Collections.Generic;
using System.Text;

namespace OXAMI.Data
{
    public class RiskArea
    {
        public int ID { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public enum Severity { Låg = 1, Medel = 2, Hög = 3 }
    }
}
