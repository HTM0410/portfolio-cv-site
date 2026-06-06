exports.handler = async function(event, context) {
  if (event.httpMethod !== "GET" && event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || event.headers['x-nf-client-connection-ip'] || 'Unknown IP';
    const isLocal = ip === 'Unknown IP' || ip === '::1' || ip.includes('127.0.0.1');
    let locationData = { city: 'Unknown', country_name: 'Unknown', org: 'Unknown' };

    if (!isLocal) {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip.split(',')[0]}`);
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'success') {
            locationData = {
              city: data.city,
              country_name: data.country,
              org: data.isp
            };
          }
        }
      } catch (err) {
        console.error("IP lookup failed:", err);
      }
    } else {
      locationData = { city: 'Localhost', country_name: 'Local Dev', org: 'N/A' };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8749694262:AAGSRIXKbeuWO1f6VCRuUcy9Scdqr3kdobA";
    const chatId = process.env.TELEGRAM_CHAT_ID || "5632266884";
    const userAgent = event.headers['user-agent'] || 'Unknown Device';
    
    const dateOpts = { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateStr = new Date().toLocaleString('vi-VN', dateOpts);

    const message = `
🚀 *Có lượt truy cập CV mới!*
- *IP:* \`${ip}\`
- *Vị trí:* ${locationData.city}, ${locationData.country_name}
- *Nhà mạng:* ${locationData.org}
- *Thiết bị:* ${userAgent.substring(0, 70)}...
- *Thời gian:* ${dateStr}
    `.trim();

    const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
      })
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ status: 'success' })
    };
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
