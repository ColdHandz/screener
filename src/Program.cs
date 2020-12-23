using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace screener {
    public class HostClass {
        public static void RunAspNetCoreHost() {
            CreateHostBuilder().Build().Run();
        }

        public static IHostBuilder CreateHostBuilder() {
            return Host.CreateDefaultBuilder()
                .ConfigureWebHostDefaults(bldr => {
                    bldr.UseWebRoot("./public");
                    bldr.UseUrls("http://localhost:8081");
                    bldr.UseStartup<Startup>();
                });
        }
    }

    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
        }
    }
}
