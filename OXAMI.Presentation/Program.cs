using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using OXAMI.Presentation;
using OXAMI.Logic;
using OXAMI.Data;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddScoped<OXAMI.Logic.MapService>();
builder.Services.AddScoped<OXAMI.Logic.EducationService>();
builder.Services.AddScoped<OXAMI.Logic.BeredskapService>();
builder.Services.AddScoped<OXAMI.Data.DataService>();

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
