using System;
using System.IO;
using Newtonsoft.Json;

namespace screener {
    class JSON {
        public static dynamic StringToObject(string str) {
            return JsonConvert.DeserializeObject<dynamic>(str);
        }
        public static dynamic JsonToString(dynamic JsonOrBson) {
            return JsonConvert.SerializeObject(JsonOrBson);
        }
    }
}
