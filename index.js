const redis = require("redis");
const client = redis.createClient(
    {
        host:"192.168.0.174",
        db:"test"
    }
);
 
client.on("error", function(error) {
  console.error(error);
});
 
client.set("key", "value", redis.print);
client.get("key", redis.print);