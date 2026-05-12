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
        private class DataRoot
        {
            public List<RiskArea> RiskAreas { get; set; } = new();
            public List<ActionPattern> ActionPatterns { get; set; } = new();
            public List<ChecklistItem> Checklists { get; set; } = new();
        }

        public async Task<List<RiskArea>> GetRiskAreasAsync()
        {
            try
            {
                // Hämtar data från den virtuella sökvägen i wwwroot
                var data = await _httpClient.GetFromJsonAsync<DataRoot>("data/data.json");
                return data?.RiskAreas ?? new List<RiskArea>();
            }
            catch (Exception)
            {
                Console.WriteLine($"Fel vid inläsning av JSON.");
                return new List<RiskArea>();
            }
        }
    }
}