using OXAMI.Data;

namespace OXAMI.Logic;

public class MapService
{
    private readonly DataService _dataService;

    public MapService(DataService dataService)
    {
        _dataService = dataService;
    }

    public async Task<List<RiskArea>> GetRiskAreasAsync()
    {
        // Här kan du lägga till logik för att t.ex. bara hämta zoner nära användaren
        return await _dataService.GetRiskAreasAsync();
    }
}