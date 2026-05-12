using System.Net.Http.Json;

namespace OXAMI.Data
{
    public class DataService
    {
        private readonly HttpClient _httpClient;

        public DataService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<RiskArea>> GetRiskZonesAsync()
        {
            try
            {
                // Hämtar data från den virtuella sökvägen i wwwroot
                var data = await _httpClient.GetFromJsonAsync<DataRoot>("data/data.json");
                return data?.RiskAreas ?? new List<RiskArea>();
            }
            catch (Exception)
            {
                // Vid fel (t.ex. offline utan cache) returneras en tom lista för att undvika krasch
                return new List<RiskArea>();
            }
        }

        // Hjälpklass för att matcha JSON-strukturen
        private class DataRoot
        {
            public List<RiskArea> RiskAreas { get; set; } = new();
            public List<ActionPattern> ActionPatterns { get; set; } = new();
            public List<ChecklistItem> Checklists { get; set; } = new();
        }
    }
}