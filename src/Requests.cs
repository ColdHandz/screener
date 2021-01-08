using System;
using System.IO;
using System.Net;
using System.Text;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;

namespace screener {
    class Requests {
        private static HttpClient Client = new HttpClient(new HttpClientHandler {
            AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate,
            UseDefaultCredentials = false,
            PreAuthenticate = true
        });
        public static string Get(string url = "http://example.com/") {
            Console.WriteLine($"Get from {url}");

            HttpResponseMessage response = Client.GetAsync(url).Result;
            string result = response.Content.ReadAsStringAsync().Result;

            // Console.WriteLine($"HttpClient Get result: {result}");

            return result;
        }
        public static string Post(string body = "{}", string url = "http://example.com/", string ContentTypeHeader = "application/json") {
            Console.WriteLine($"Post to {url} with {body}");

            var content = new StringContent(body, Encoding.UTF8, ContentTypeHeader);

            HttpResponseMessage response = Client.PostAsync(url, content).Result;
            string result = response.Content.ReadAsStringAsync().Result;

            // Console.WriteLine($"HttpClient POST result: {result}");

            return result;
        }
    }
}
