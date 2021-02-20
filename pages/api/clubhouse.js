import got from "got";
import redis from "redis";
import { promisify } from "util";

export default async function (request, response) {
  const dt = new Date();
  const client = redis.createClient(
    process.env.REDIS_URL
  );
  const getAsync = promisify(client.get).bind(client);
  const setAsync = promisify(client.set).bind(client);

  let roomName = await getAsync("clubhouse.room_name");
  let roomId = await getAsync("clubhouse.room_id");

  if (roomName === null) {
    const { users } = await got(
      "https://www.clubhouseapi.com/api/get_online_friends",
      {
        headers: {
          "User-Agent": "Clubhouse/269",
          "Content-Type": "application/json",
          "CH-Locale": "en_US",
          "CH-AppVersion": "0.2.15",
          "CH-AppBuild": "269",
          "CH-DeviceId": process.env.CLUBHOUSE_DEVICEID,
          Authorization: `Token ${process.env.CLUBHOUSE_TOKEN}`,
          "CH-UserID": process.env.CLUBHOUSE_UID, // p.s. it's not 3436182 (@gbougakov)
        },
        method: 'POST',
        body: "{}"
      },
    ).json();

    const user = users.find(({user_id: uid}) => uid === 3436182);

    if (user.is_speaker) {
      roomName = user.topic;
      roomId = user.channel;

      await setAsync("clubhouse.room_name", [roomName, 'EX', '120'])
      await setAsync("clubhouse.room_id", [roomId, 'EX', '120'])
    }
  }

  response.json({
    roomName,
    roomId,
  });
}
