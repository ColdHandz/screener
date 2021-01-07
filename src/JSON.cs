using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace screener {
    class JSON {
        public static dynamic StringToObject(string str) {
            return JsonSerializer.Deserialize<dynamic>(str);
        }
        // public static dynamic JsonToString(dynamic JsonOrBson) {
        //     return JsonConvert.SerializeObject(JsonOrBson);
        // }
    }
}
