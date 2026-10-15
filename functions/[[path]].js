const E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const H=(b,s=200,h={})=>new Response(b,{status:s,headers:{'content-type':'text/html;charset=utf-8',...h}});
const N={vi:{products:'Sản phẩm',industries:'Ứng dụng',services:'Dịch vụ',about:'Chúng tôi',news:'Tin tức',intro:'Giới thiệu',contact:'Liên hệ',lang:'English',more:'XEM THÊM ›'},en:{products:'Products',industries:'Industries',services:'Services',about:'About Us',news:'News',intro:'Overview',contact:'Contact',lang:'Tiếng Việt',more:'LEARN MORE ›'}};
const R={products:'product',industries:'industry',news:'news'},RV=Object.fromEntries(Object.entries(R).map(([a,b])=>[b,a]));
const L={vi:'vietnamese',en:'english'};
const SEED={product:['Mechanical Seals for Pumps|Phớt cơ khí cho bơm','Dry Gas Seals for Compressors|Phớt khí khô cho máy nén','Agitator Mechanical Seal|Phớt cơ khí cho máy khuấy','Seal Auxiliary Systems for Pumps|Hệ thống phụ trợ phớt cho bơm','Dry Gas Seal Support Systems for Compressors|Hệ thống hỗ trợ phớt khí khô cho máy nén','Dry Gas Seal and Support System for Pipeline Compressor|Phớt khí khô và hệ thống hỗ trợ cho máy nén đường ống','Split Mechanical Seal|Phớt cơ khí dạng chia đôi','Engineered Seals|Phớt thiết kế theo yêu cầu','Carbon Ring Seal|Phớt vòng carbon','Bearing Protector|Bảo vệ vòng bi','Rotary Jet Pumps|Bơm phun tia quay','SIMS|SIMS','Sealing Components|Linh kiện làm kín','Shield Tunneling Machine Seal|Phớt cho máy đào hầm','Seal Manufacturing System|Hệ thống sản xuất phớt','Materials|Vật liệu'],industry:['Oil and Gas|Dầu khí','Refinery|Lọc dầu','Petrochemicals and Chemicals|Hóa dầu và hóa chất','Power|Điện lực','Other Industries|Các ngành khác'],service:['Maintenance And Servicing|Bảo trì và sửa chữa','Training|Đào tạo','On-site Services|Dịch vụ tại chỗ','Case Studies|Trường hợp điển hình']};
const DEF={about:{vi:['Giới thiệu','Hãy nhập phần giới thiệu công ty trong trang admin.'],en:['Overview','Add your company overview in the admin page.']},contact:{vi:['Liên hệ','Địa chỉ: ...\nĐiện thoại: ...\nEmail: ...'],en:['Contact','Address: ...\nPhone: ...\nEmail: ...']},note:{vi:['',''],en:['','']},foot:{vi:['','SNS-VN cung cấp giải pháp làm kín chất lượng cao cho các ngành công nghiệp.'],en:['','SNS-VN provides high-quality sealing solutions for industry.']}};
const SLD=[['Phớt cơ khí cho bơm','Mechanical Seals for Pumps','Phớt cơ khí là thiết bị làm kín phổ biến nhất trong thiết bị quay.','Mechanical seals are the most commonly used sealing device in rotating equipment.'],['Phớt khí khô cho máy nén','Dry Gas Seals for Compressors','Giải pháp làm kín cho máy nén tốc độ cao, áp suất cao.','Sealing solutions for high-speed, high-pressure compressors.'],['Hệ thống hỗ trợ cho máy nén','Support Systems for Compressors','Hệ thống điều khiển tuân thủ API, thiết kế theo điều kiện vận hành.','API-compliant control systems designed for your operating conditions.']];
const CTA='SNS-VN hỗ trợ tư vấn, cung cấp và bảo trì giải pháp làm kín phù hợp với yêu cầu của bạn. Hãy liên hệ để được báo giá theo thông số thiết bị.';
const ILL=(k,h)=>{const c=`hsl(${h},72%,40%)`,d=`hsl(${h},65%,20%)`,l=`hsl(${h},80%,86%)`,fr='<rect x="400" y="120" width="360" height="436" rx="20" fill="none" stroke="#fff" stroke-width="8" opacity=".7"/>',sh=`<rect x="100" y="300" width="1000" height="76" fill="${l}"/>`,G={s:sh+`<rect x="440" y="170" width="90" height="336" rx="12" fill="#fff"/><rect x="540" y="170" width="90" height="336" rx="12" fill="${l}"/><polyline points="650,200 710,250 650,300 710,350 650,400 710,450" fill="none" stroke="#fff" stroke-width="12"/>`+fr,g:sh+`<rect x="480" y="170" width="70" height="336" rx="12" fill="#fff"/><rect x="560" y="170" width="70" height="336" rx="12" fill="${l}"/><path d="M120 200h300M120 470h300M720 200h300M720 470h300" stroke="#fff" stroke-width="10" stroke-dasharray="4 20" stroke-linecap="round"/>`+fr,p:`<rect x="180" y="200" width="110" height="400" rx="14" fill="#fff"/><rect x="340" y="280" width="140" height="320" rx="14" fill="${l}"/><rect x="540" y="160" width="90" height="440" rx="14" fill="#fff"/><rect x="680" y="380" width="240" height="220" rx="14" fill="${l}"/><path d="M120 600h960M235 200V140M585 160V90" stroke="#fff" stroke-width="10"/>`,n:`<circle cx="600" cy="338" r="210" fill="none" stroke="#fff" stroke-width="10"/><ellipse cx="600" cy="338" rx="90" ry="210" fill="none" stroke="#fff" stroke-width="8"/><path d="M390 338h420M430 230h340M430 446h340" stroke="#fff" stroke-width="8"/>`};return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${d}"/></linearGradient></defs><rect width="1200" height="675" fill="url(#a)"/>${G[k]}</svg>`};
const PD=[
'p|agitator-mechanical-seal|s|Phớt cơ khí cho máy khuấy (agitator mechanical seal) làm kín trục máy khuấy trong bồn phản ứng, bồn trộn và bồn chứa, nơi trục dài, rung lắc và thường làm việc trong chân không hoặc áp suất.|Chịu được độ lệch trục và rung động lớn;Thiết kế phớt đôi cho môi chất độc hại hoặc vô trùng;Dạng cartridge lắp đặt nhanh, dễ thay thế|Ngành hóa chất, dược phẩm, thực phẩm, sơn và polymer.',
'p|seal-auxiliary-systems-for-pumps|s|Hệ thống phụ trợ phớt cho bơm cung cấp, làm mát và duy trì chất lỏng chặn hoặc chất lỏng đệm cho phớt cơ khí, theo các sơ đồ trong API 682 như plan 52, 53 và 54.|Bình chứa, bộ làm mát, bơm tuần hoàn và đồng hồ đo lắp trọn bộ trên một khung;Giám sát áp suất, mức và nhiệt độ để cảnh báo sớm;Thiết kế theo điều kiện vận hành của bơm|Bơm trong lọc dầu, hóa dầu và các nhà máy xử lý môi chất độc hại hoặc dễ cháy.',
'p|dry-gas-seal-support-systems-for-compressors|g|Hệ thống hỗ trợ phớt khí khô cho máy nén là bảng điều khiển khí xử lý và cấp khí sạch, khô, đúng áp suất và lưu lượng cho phớt khí khô.|Lọc, điều áp, đo lưu lượng và giám sát áp suất chênh lệch;Gia nhiệt (heat tracing) khi khí dễ ngưng tụ;Thiết kế theo API, tùy biến theo điều kiện máy nén|Máy nén ly tâm trong nhà máy khí, lọc hóa dầu và trạm nén khí.',
'p|dry-gas-seal-and-support-system-for-pipeline-compressor|g|Phớt khí khô và hệ thống hỗ trợ cho máy nén đường ống được thiết kế cho các trạm nén khí thiên nhiên chạy liên tục, thường xuyên khởi động và dừng máy.|Độ tin cậy cao cho vận hành dài ngày;Giám sát từ xa, truyền tín hiệu về hệ thống DCS;Giảm rò rỉ khí ra môi trường|Trạm nén trên đường ống dẫn khí thiên nhiên và dầu.',
'p|split-mechanical-seal|s|Phớt cơ khí dạng chia đôi (split mechanical seal) được tách thành hai nửa nên có thể lắp hoặc thay mà không cần tháo bơm hay động cơ.|Rút ngắn thời gian dừng máy và chi phí bảo trì;Phù hợp thiết bị lớn khó tháo rời;Dùng để nâng cấp thay cho bao kín tết|Bơm lớn, quạt, máy khuấy trong ngành nước, giấy, điện và hóa chất.',
'p|engineered-seals|s|Phớt thiết kế theo yêu cầu (engineered seals) được phát triển riêng cho các điều kiện đặc biệt mà phớt tiêu chuẩn khó đáp ứng như tốc độ, áp suất hoặc nhiệt độ rất cao.|Thiết kế dựa trên thông số vận hành thực tế;Phân tích và chọn vật liệu phù hợp môi chất;Có thể cải tiến phớt đang gặp sự cố lặp lại|Thiết bị quay đặc thù trong dầu khí, hóa dầu và năng lượng.',
'p|carbon-ring-seal|s|Phớt vòng carbon (carbon ring seal) là phớt dạng phân đoạn bằng vật liệu carbon, làm kín trục tốc độ cao ở nhiệt độ cao với lượng rò rỉ thấp.|Chịu nhiệt và tốc độ cao;Hạn chế rò rỉ khí hoặc hơi dọc trục;Dùng làm phớt ngăn cách bảo vệ ổ trục|Tua-bin hơi, máy nén ly tâm và thiết bị quay tốc độ cao.',
'p|bearing-protector|s|Bộ bảo vệ vòng bi (bearing protector) ngăn bụi, nước và tạp chất xâm nhập vào gối đỡ, đồng thời giữ dầu bôi trơn bên trong.|Hoạt động không tiếp xúc nên ít mài mòn;Kéo dài tuổi thọ vòng bi và dầu bôi trơn;Giảm số lần dừng máy do hỏng ổ trục|Bơm, động cơ, hộp số và máy quay trong nhà máy công nghiệp.',
'p|rotary-jet-pumps|s|Bơm phun tia quay (rotary jet pump) là loại bơm có vỏ quay kết hợp ống pitot, phù hợp lưu lượng nhỏ nhưng cột áp cao.|Cột áp cao với lưu lượng nhỏ;Cấu tạo gọn, ít chi tiết chuyển động;Hoạt động ổn định ở lưu lượng thấp|Cấp nước nồi hơi và các dịch vụ cột áp cao trong hóa chất, điện lực.',
'p|sealing-components|s|Linh kiện làm kín (sealing components) gồm các chi tiết dùng để chế tạo và thay thế cho phớt như vòng mặt phớt, ống xếp, lò xo, gioăng O-ring và các chi tiết kim loại.|Gia công chính xác, mặt phớt phẳng;Nhiều vật liệu: silicon carbide, carbon, tungsten carbide;Hỗ trợ thay thế cho nhiều loại phớt phổ biến|Bảo trì và sửa chữa phớt cho nhà máy và xưởng cơ khí.',
'p|shield-tunneling-machine-seal|s|Phớt cho máy đào hầm (TBM, shield tunneling machine seal) bảo vệ ổ đỡ chính và các cụm quay khỏi bùn, bụi và nước dưới áp suất cao.|Chịu mài mòn và va đập cao;Làm việc ổn định trong môi trường bùn, đất và nước;Giảm nguy cơ dừng máy giữa tuyến|Thi công metro, hầm giao thông và đường hầm thủy lợi.',
'p|seal-manufacturing-system|s|Hệ thống sản xuất phớt (seal manufacturing system) gồm thiết bị và quy trình gia công, lắp ráp và kiểm tra chi tiết phớt với độ chính xác cao.|Gia công chính xác bằng máy CNC;Kiểm soát chất lượng từng công đoạn;Có thể mở rộng năng lực sản xuất|Xưởng chế tạo và sửa chữa phớt.',
'p|materials|s|Vật liệu làm phớt (materials) quyết định khả năng chịu mài mòn, ăn mòn và nhiệt độ của phớt, gồm silicon carbide, tungsten carbide, carbon graphite, ceramic và các loại elastomer.|Silicon carbide: cứng, chịu mài mòn và ăn mòn tốt;Carbon graphite: tự bôi trơn, chịu chạy khô ngắn hạn;Elastomer FKM, EPDM, PTFE, FFKM cho từng loại hóa chất|Chọn vật liệu theo môi chất, nhiệt độ và áp suất làm việc.',
'i|petrochemicals-and-chemicals|p|Ngành hóa dầu và hóa chất sử dụng nhiều môi chất ăn mòn, độc hại, có độ nhớt cao hoặc chứa hạt rắn, đòi hỏi phớt cơ khí có vật liệu và cấu hình phù hợp.|Phớt đôi và hệ thống chất lỏng chặn cho môi chất độc hại;Vật liệu chịu axit, kiềm và dung môi;Phớt máy khuấy cho bồn phản ứng|Nhà máy ethylene, polymer, phân bón và hóa chất cơ bản.',
'i|power|p|Trong ngành điện lực, bơm cấp nước nồi hơi, bơm tuần hoàn và máy nén phải vận hành bền bỉ ở nhiệt độ và áp suất cao.|Phớt chịu nhiệt cho bơm nước nóng;Phớt vòng carbon cho tua-bin;Giảm rủi ro dừng tổ máy ngoài kế hoạch|Nhiệt điện, điện khí và các nhà máy điện công nghiệp.',
'i|other-industries|p|Ngoài dầu khí và hóa chất, phớt làm kín còn cần cho nhiều ngành khác với yêu cầu riêng về vệ sinh, mài mòn và độ bền.|Dược phẩm, thực phẩm: yêu cầu vệ sinh, vô trùng;Khai khoáng, xi măng: môi trường mài mòn cao;Cấp thoát nước, giấy, đóng tàu và hầm ngầm|Tư vấn lựa chọn phớt theo từng ngành.'
];
const NW=[
['cach-chon-phot-co-khi-cho-bom','Cách chọn phớt cơ khí cho bơm: 5 yếu tố cần xem xét','How to Choose a Mechanical Seal for Your Pump: 5 Key Factors',`Chọn đúng phớt cơ khí cho bơm giúp giảm rò rỉ, tăng tuổi thọ thiết bị và tiết kiệm chi phí bảo trì. Trước khi đặt hàng, bạn nên xem xét năm yếu tố sau.
## 5 yếu tố cần xem xét
- Môi chất: tính ăn mòn, độc hại, độ nhớt và hàm lượng hạt rắn.
- Nhiệt độ và áp suất tại buồng phớt.
- Kích thước trục, tốc độ quay và kiểu bơm.
- Tiêu chuẩn áp dụng như API 682 và yêu cầu về phát thải.
- Điều kiện lắp đặt và khả năng bảo trì.
## Lời khuyên
Hãy cung cấp bản vẽ hoặc thông số bơm đầy đủ cho nhà cung cấp để được tư vấn cấu hình phớt, vật liệu và sơ đồ phụ trợ phù hợp. Liên hệ SNS-VN để được hỗ trợ.`],
['phot-khi-kho-la-gi','Phớt khí khô là gì? Khi nào nên dùng cho máy nén','What Is a Dry Gas Seal and When Should You Use One?',`Phớt khí khô là phớt không tiếp xúc, dùng màng khí cực mỏng giữa hai mặt phớt để làm kín trục máy nén. Do không mài mòn khi vận hành, phớt có ma sát thấp và tuổi thọ dài.
## Khi nào nên dùng phớt khí khô
- Máy nén khí hydrocarbon, hydro, CO2 hoặc khí tổng hợp.
- Khi cần giảm rò rỉ và phát thải.
- Khi muốn bỏ hệ thống dầu làm kín phức tạp.
## Điều kiện để phớt hoạt động tốt
Khí cấp phải sạch, khô và có áp suất cao hơn buồng phớt. Hệ thống hỗ trợ cần được thiết kế đúng theo điều kiện máy nén. Liên hệ SNS-VN để được tư vấn.`],
['bao-tri-phot-co-khi','Bảo trì phớt cơ khí: dấu hiệu cảnh báo và cách kéo dài tuổi thọ','Mechanical Seal Maintenance: Warning Signs and Tips to Extend Seal Life',`Phần lớn sự cố phớt cơ khí đến từ vận hành và lắp đặt chứ không phải lỗi sản xuất. Phát hiện sớm dấu hiệu bất thường giúp tránh hỏng hóc và dừng máy ngoài kế hoạch.
## Dấu hiệu cảnh báo
- Rò rỉ tăng dần hoặc có vệt ẩm quanh phớt.
- Tiếng kêu, rung động hoặc nhiệt độ tăng bất thường.
- Cặn bám hoặc mài mòn tại mặt phớt.
## Cách kéo dài tuổi thọ phớt
- Không để bơm chạy khô.
- Căn chỉnh trục và kiểm tra rung định kỳ.
- Lắp đặt đúng quy trình, dùng phớt cartridge khi có thể.
- Duy trì hệ thống xả và làm mát phớt hoạt động tốt.`]
];
const ABOUT=`SNS-VN là đơn vị chuyên cung cấp giải pháp làm kín cho thiết bị quay trong các ngành dầu khí, lọc hóa dầu, hóa chất và điện lực tại Việt Nam, gồm phớt cơ khí, phớt khí khô, hệ thống phụ trợ và dịch vụ kỹ thuật.
## Về thương hiệu Sinoseal
Theo thông tin công bố của Sinoseal Holding, đây là doanh nghiệp niêm yết (mã cổ phiếu 300470) có trụ sở tại Thành Đô, Tứ Xuyên, Trung Quốc, với hơn 40 năm nghiên cứu và phát triển trong lĩnh vực làm kín chất lỏng. Danh mục sản phẩm gồm phớt khí khô, phớt cơ khí tốc độ cao và áp suất cao, phớt ống xếp kim loại, phớt chia đôi, hệ thống phụ trợ theo API 682 cùng vật liệu và linh kiện làm kín.
## Dịch vụ của chúng tôi
- Tư vấn lựa chọn phớt theo thông số thiết bị.
- Cung cấp phớt, hệ thống phụ trợ và linh kiện.
- Bảo trì, đào tạo và hỗ trợ kỹ thuật tại chỗ.
## Cam kết
Chúng tôi lấy độ tin cậy của thiết bị và sự an toàn của khách hàng làm trọng tâm. Hãy liên hệ SNS-VN để được tư vấn và báo giá.`;
const ART=[
['product','mechanical-seals-for-pumps',`Phớt cơ khí cho bơm (mechanical seal) là giải pháp làm kín trục quay phổ biến nhất trong bơm ly tâm công nghiệp. Phớt giúp ngăn rò rỉ chất lỏng ra môi trường, giảm thất thoát sản phẩm, hạn chế mài mòn trục và bảo đảm an toàn cho nhà máy. So với bao kín dạng tết (gland packing), phớt cơ khí rò rỉ thấp hơn nhiều, tiêu tốn ít công suất hơn và ít phải bảo dưỡng hơn.
## Nguyên lý hoạt động của phớt cơ khí
Phớt gồm một mặt làm kín quay cùng trục và một mặt làm kín đứng yên gắn với thân bơm. Hai mặt được lò xo hoặc ống xếp ép sát vào nhau, giữa chúng là một màng chất lỏng cực mỏng vừa bôi trơn vừa làm kín. Độ phẳng của mặt phớt và chất lượng màng chất lỏng quyết định trực tiếp tuổi thọ của phớt.
## Các loại phớt cơ khí cho bơm phổ biến
- Phớt đơn: cấu tạo đơn giản, chi phí thấp, phù hợp chất lỏng không độc hại.
- Phớt đôi: có chất lỏng chặn hoặc đệm giữa hai phớt, dùng cho môi chất độc hại, dễ cháy hoặc chứa hạt rắn.
- Phớt cartridge: lắp sẵn thành cụm, giảm sai sót khi lắp đặt và rút ngắn thời gian dừng máy.
- Phớt ống xếp kim loại: chịu nhiệt độ cao hoặc rất thấp, không dùng gioăng đàn hồi chuyển động.
- Phớt chia đôi: thay thế mà không cần tháo bơm hoặc động cơ.
## Vật liệu mặt phớt và gioăng
Mặt phớt thường dùng silicon carbide, tungsten carbide, carbon graphite hoặc ceramic. Gioăng làm kín phụ có thể là FKM, EPDM, PTFE hoặc FFKM. Việc chọn vật liệu phụ thuộc vào nhiệt độ, tính ăn mòn, độ nhớt và hàm lượng hạt rắn trong môi chất.
## Tiêu chuẩn API 682
Với bơm trong ngành dầu khí và hóa dầu, phớt và hệ thống phụ trợ thường được thiết kế theo API 682 (ISO 21049). Tiêu chuẩn này quy định cách phân loại, các cấu hình lắp đặt và các sơ đồ đường ống xả, làm mát (piping plan) nhằm tăng độ tin cậy và tuổi thọ phớt.
## Cách chọn phớt cơ khí phù hợp
Để chọn đúng phớt, cần biết: loại bơm và kích thước trục, tốc độ quay, áp suất và nhiệt độ buồng phớt, thành phần và độ nhớt của môi chất, hàm lượng hạt rắn cùng yêu cầu về phát thải. Cung cấp đầy đủ thông tin giúp rút ngắn thời gian chọn mẫu và tránh chọn sai.
## Nguyên nhân phớt cơ khí hỏng sớm
- Bơm chạy khô hoặc mất màng chất lỏng.
- Rung động, lệch trục hoặc ổ trục mòn.
- Lắp đặt sai hoặc xử lý mặt phớt không cẩn thận.
- Hạt rắn mài mòn, môi chất kết tinh hoặc bay hơi tại mặt phớt.
## Tư vấn phớt cơ khí cho bơm
SNS-VN hỗ trợ tư vấn lựa chọn, cung cấp và bảo trì phớt cơ khí cho nhiều loại bơm trong các ngành dầu khí, lọc hóa dầu, hóa chất và điện lực. Hãy liên hệ để được tư vấn và báo giá.`],
['product','dry-gas-seals-for-compressors',`Phớt khí khô cho máy nén (dry gas seal) là loại phớt không tiếp xúc, dùng khí sạch tạo màng làm kín giữa hai mặt phớt. Giải pháp này được dùng rộng rãi cho máy nén ly tâm, máy nén đường ống và tua-bin trong ngành dầu khí, hóa dầu, với ưu điểm rò rỉ thấp, ma sát nhỏ và độ tin cậy cao.
## Nguyên lý hoạt động
Mặt phớt quay được gia công các rãnh xoắn rất nhỏ. Khi trục quay, rãnh đưa khí vào khe hở và tạo lực nâng đẩy hai mặt phớt tách nhau ra, khe hở chỉ vài micromet. Vì không có tiếp xúc khi vận hành nên phớt gần như không mài mòn. Khi máy dừng, lò xo ép hai mặt lại để giữ kín.
## Ưu điểm của phớt khí khô
- Không dùng dầu làm kín nên không nhiễm bẩn khí công nghệ.
- Ma sát thấp, tiết kiệm năng lượng so với phớt dầu.
- Lượng khí rò rỉ rất nhỏ, giảm phát thải.
- Tuổi thọ cao và ít phải bảo trì.
- Hệ thống đơn giản hơn hệ thống dầu làm kín truyền thống.
## Các cấu hình phổ biến
Cấu hình đơn dùng cho khí sạch, áp thấp. Cấu hình tandem gồm phớt chính và phớt dự phòng, là lựa chọn phổ biến nhất cho khí hydrocarbon. Cấu hình đôi dùng khí chặn (thường là nitơ) khi không được phép rò khí công nghệ ra ngoài. Phớt ngăn cách (separation seal) dạng vòng carbon bảo vệ ổ trục khỏi khí rò và dầu bôi trơn.
## Hệ thống hỗ trợ phớt khí khô
Bảng điều khiển khí (gas panel) gồm bộ lọc, van điều áp, đồng hồ lưu lượng và cảm biến áp suất chênh lệch để cấp khí sạch, khô cho phớt và cảnh báo sớm khi có bất thường. Khi khí dễ ngưng tụ, cần gia nhiệt (heat tracing). Thiết kế thường tham chiếu các tiêu chuẩn như API 692 và API 617.
## Ứng dụng
Máy nén khí thiên nhiên, khí tổng hợp, khí hydro, CO2, khí lò cao cùng các trạm nén trên đường ống dẫn khí.
## Lưu ý khi vận hành
Khí cấp phải sạch, khô và có áp suất cao hơn buồng phớt. Cần theo dõi lưu lượng rò rỉ và áp suất chênh lệch, tránh để chất lỏng lọt vào phớt khi khởi động và dừng máy. Bảo dưỡng định kỳ theo khuyến cáo của nhà sản xuất sẽ kéo dài tuổi thọ phớt.
## Tư vấn phớt khí khô
SNS-VN hỗ trợ tư vấn lựa chọn, cung cấp phớt khí khô và hệ thống hỗ trợ cho máy nén. Hãy liên hệ để được báo giá theo thông số máy của bạn.`],
['industry','oil-and-gas',`Ngành dầu khí đòi hỏi giải pháp làm kín cho bơm và máy nén hoạt động liên tục trong điều kiện áp suất cao, nhiệt độ cao và môi chất nguy hiểm. Một sự cố rò rỉ không chỉ gây thất thoát sản phẩm mà còn có thể dẫn đến cháy nổ, ô nhiễm và dừng sản xuất. Phớt cơ khí và phớt khí khô đáng tin cậy là yếu tố then chốt của vận hành an toàn.
## Thiết bị cần làm kín trong ngành dầu khí
- Bơm vận chuyển dầu thô, bơm đường ống và bơm bơm ép.
- Máy nén khí thiên nhiên, khí đồng hành và khí nâng.
- Thiết bị tách, xử lý và chế biến khí tại giàn khoan, FPSO và nhà máy xử lý khí.
## Thách thức của môi trường dầu khí
Môi chất thường là hydrocarbon nhẹ dễ bay hơi, có thể chứa H2S, CO2, cát và hạt rắn. Áp suất cao làm tăng tải lên mặt phớt, còn nhiệt độ thay đổi lớn ảnh hưởng đến vật liệu gioăng. Ngoài ra còn có yêu cầu nghiêm ngặt về phát thải và an toàn.
## Giải pháp làm kín phù hợp
Phớt cơ khí dạng cartridge theo API 682 cho bơm, phớt đôi có hệ thống chất lỏng chặn cho môi chất độc hại, phớt khí khô kèm bảng điều khiển khí cho máy nén, và vật liệu chịu ăn mòn, chịu hạt rắn cho dịch vụ khắc nghiệt. Các sơ đồ phụ trợ như plan 11, 32, 52, 53 và 54 được chọn theo mức độ nguy hiểm của môi chất.
## Lợi ích khi chọn đúng giải pháp
- Giảm rò rỉ và phát thải ra môi trường.
- Tăng thời gian giữa hai lần bảo dưỡng.
- Giảm chi phí dừng máy ngoài kế hoạch.
- Đáp ứng yêu cầu an toàn của chủ đầu tư.
## Liên hệ tư vấn
SNS-VN tư vấn giải pháp làm kín cho bơm và máy nén trong ngành dầu khí, từ lựa chọn phớt đến hệ thống hỗ trợ và dịch vụ bảo trì. Hãy liên hệ để được hỗ trợ.`],
['industry','refinery',`Nhà máy lọc dầu vận hành liên tục nhiều năm với các môi chất nóng, dễ cháy, ăn mòn và có độ nhớt cao. Từ chưng cất dầu thô, cracking xúc tác, hydrocracking, hydrotreating đến reforming, mọi công đoạn đều cần bơm và máy nén được làm kín tốt. Phớt cơ khí, phớt khí khô và hệ thống phụ trợ phù hợp giúp giảm rò rỉ, bảo đảm an toàn và kéo dài chu kỳ vận hành.
## Các công đoạn lọc dầu cần giải pháp làm kín
- Chưng cất dầu thô và chưng cất chân không.
- Cracking xúc tác tầng sôi (FCC) và cốc hóa.
- Hydrocracking, hydrotreating và xử lý hydro.
- Reforming, tách chiết hợp chất thơm và sản xuất nhiên liệu sạch.
## Yêu cầu khắt khe với phớt trong nhà máy lọc dầu
Dầu nặng nhiệt độ cao, môi chất chứa lưu huỳnh và hạt xúc tác, khí hydro áp suất cao đều tạo điều kiện làm việc khắc nghiệt cho mặt phớt. Rò rỉ hydrocarbon nóng có nguy cơ bốc cháy, vì vậy phớt phải ổn định, bền nhiệt và có hệ thống giám sát tốt.
## Giải pháp đề xuất
Phớt ống xếp kim loại cho bơm nhiệt độ cao, phớt đôi kèm hệ thống chất lỏng chặn cho môi chất độc hại, các sơ đồ phụ trợ làm mát, quench và xả theo API 682, và phớt khí khô cho máy nén hydro, máy nén khí công nghệ. Vật liệu mặt phớt như silicon carbide giúp tăng khả năng chịu mài mòn và nhiệt.
## Lợi ích
- Vận hành an toàn, giảm nguy cơ cháy nổ.
- Giảm tổn thất sản phẩm và phát thải.
- Kéo dài thời gian giữa hai kỳ đại tu.
- Giảm chi phí bảo trì tổng thể.
## Liên hệ tư vấn
SNS-VN hỗ trợ tư vấn, cung cấp phớt và hệ thống phụ trợ cho bơm, máy nén trong nhà máy lọc dầu. Hãy liên hệ để được hỗ trợ theo thông số thiết bị của bạn.`]
];
const IMG=/^https?:\/\/\S+\.(png|jpe?g|webp|gif|svg)(\?\S*)?$|^\/img\/\w+$/i;
const LN=s=>(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
const NT=s=>LN(s).filter(x=>!IMG.test(x)).join('\n');
const img=b=>LN(b).find(x=>IMG.test(x))||'',pic=r=>img(r.vi_b)||img(r.en_b);
const txt=(b,n=155)=>LN(b).filter(x=>!IMG.test(x)).map(x=>x.replace(/^(## |- )/,'')).join(' ').slice(0,n);
const B=s=>{let o='',u=0;for(const x of LN(s)){const li=x.startsWith('- ');if(u&&!li){o+='</ul>';u=0}if(li){if(!u){o+='<ul>';u=1}o+=`<li>${E(x.slice(2))}</li>`}else o+=IMG.test(x)?`<img src="${E(x)}" alt="">`:x.startsWith('## ')?`<h3>${E(x.slice(3))}</h3>`:`<p>${E(x)}</p>`}return o+(u?'</ul>':'')};
const SL=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const U=(l,p)=>l=='en'?'/en'+(p=='/'?'':p):p;
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
async function tr(env,s,f,t){let n=0;return(await Promise.all((s||'').split(/\r?\n/).map(async x=>{const m=x.match(/^(## |- )?([\s\S]*)$/);if(!m[2].trim()||IMG.test(m[2].trim())||++n>38)return x;try{return(m[1]||'')+(await env.AI.run('@cf/meta/m2m100-1.2b',{text:m[2],source_lang:L[f],target_lang:L[t]})).translated_text}catch(e){return x}}))).join('\n')}
const CSS=`:root{--b:#0b5cb5;--n:#0a2f55;--g:#f1f5f8}*{box-sizing:border-box;margin:0}body{font:16px/1.6 Segoe UI,Arial,sans-serif;color:#1c2733}a{color:inherit;text-decoration:none}ul{list-style:none}.w{max-width:1240px;margin:auto;padding:0 20px}header{position:sticky;top:0;background:#fff;box-shadow:0 1px #dde4ea;z-index:30}header .w{display:flex;align-items:center;justify-content:space-between;min-height:84px}.lg{font:800 30px Arial;color:var(--b)}nav>ul{display:flex;align-items:center}nav li{position:relative}nav>ul>li>a{display:block;padding:30px 16px;font-weight:700;color:var(--b);text-transform:uppercase;font-size:15px}nav li ul{display:none;position:absolute;left:0;top:100%;background:#fff;min-width:270px;border-top:3px solid var(--n);box-shadow:0 8px 24px rgba(0,0,0,.14)}nav li:hover>ul{display:block}nav li ul a{display:block;padding:11px 16px;font-size:14px;border-bottom:1px solid #eef1f4}nav li ul a:hover{background:var(--g);color:var(--b)}.hero{position:relative;height:580px;background:linear-gradient(100deg,#0a58b0 40%,#a9c3df);color:#fff;overflow:hidden}.sl{position:absolute;inset:0;opacity:0;transition:opacity .6s;display:flex;align-items:center;pointer-events:none}.sl.on{opacity:1;pointer-events:auto}.sl .w{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;width:100%}.hero h1,.hero h2{font-size:46px;line-height:1.15;margin-bottom:18px;color:#fff;text-transform:uppercase}.hero p{font-size:18px;max-width:560px;margin-bottom:26px}.sl img{width:100%;max-height:430px;object-fit:contain}.bt{display:inline-block;background:var(--b);color:#fff;padding:12px 26px;font-weight:600}.hero .bt{background:none;border:1px solid #fff;border-radius:40px}.ct{position:absolute;left:0;right:0;bottom:26px}.ct .w{display:flex;justify-content:space-between;align-items:center}.dts{display:flex;gap:10px}.dt{width:12px;height:12px;border-radius:6px;background:rgba(255,255,255,.55);cursor:pointer;transition:width .3s}.dt.on{width:38px;background:var(--n)}.ct button{width:46px;height:46px;margin-left:12px;border-radius:50%;border:1px solid #fff;background:none;color:#fff;font-size:24px;cursor:pointer}section{padding:56px 0}h1,h2{font-size:30px;margin-bottom:22px;color:#0b1b2b}h3{margin:18px 0 8px;color:var(--n)}.gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:22px}.cd{border:1px solid #dde4ea;padding:18px;text-align:center;background:#fff}.cd:hover{box-shadow:0 8px 24px rgba(11,92,181,.16)}.cd img,.im{display:block;width:100%;height:190px;object-fit:contain;background:var(--g);border-radius:6px;margin-bottom:12px}.cd h3{font-size:17px;font-weight:500;margin:0;color:inherit}.alt{background:var(--g)}.sd{display:grid;grid-template-columns:270px 1fr;gap:36px}.sd aside li a{display:block;padding:9px 12px;border-bottom:1px solid #e3e9ee;font-size:15px}.sd aside li a:hover,.sd aside .on{color:var(--b);font-weight:700}.ar{max-width:860px}.ar p{margin-bottom:14px}.ar img{max-width:100%;margin:10px 0}.ar ul{list-style:disc;margin:0 0 14px 22px}footer{background:#dde2e0 radial-gradient(circle,#c3cbc8 2px,transparent 2px) 0 0/14px 14px;padding-top:50px;color:#394450}.fg{display:grid;grid-template-columns:repeat(4,1fr);gap:26px}.fg h5{font-size:21px;color:var(--n);margin-bottom:14px}.fg li{margin-bottom:7px;font-size:14px}.fg a:hover{color:var(--b)}.pl{white-space:pre-line;font-size:14px}.fd{margin:36px 0;font-size:15px}.cp{background:var(--n);color:#fff;padding:18px 0;font-size:14px}.nt{font-size:13px;line-height:1.5;color:#394450;margin:0 16px;max-width:320px;border-left:2px solid #dde4ea;padding-left:14px}@media(max-width:800px){.hero h1,.hero h2{font-size:28px}.sl .w,.sd{grid-template-columns:1fr}.sl img{display:none}.fg{grid-template-columns:1fr 1fr}header .w{flex-wrap:wrap}nav>ul{flex-wrap:wrap}nav>ul>li>a{padding:10px}}`;

async function init(env){if(init.d)return;const q=s=>env.DB.prepare(s);
 await q('CREATE TABLE IF NOT EXISTS c(type TEXT,slug TEXT,vi_t TEXT,vi_b TEXT,en_t TEXT,en_b TEXT,ts INTEGER,PRIMARY KEY(type,slug))').run();
 await q('CREATE TABLE IF NOT EXISTS im(id TEXT PRIMARY KEY,ct TEXT,d TEXT)').run();
 if(!await q('SELECT 1 FROM c WHERE type=?1 AND slug=?2').bind('set','seeded').first()){let n=1;const b=[q("INSERT INTO c VALUES('set','seeded','','','','',0)")];
  for(const[t,a]of Object.entries(SEED))for(const x of a){const[e,v]=x.split('|');b.push(q('INSERT OR IGNORE INTO c VALUES(?1,?2,?3,?4,?5,?6,?7)').bind(t,SL(e),v,'',e,'',n++))}await env.DB.batch(b)}
 if(!await q('SELECT 1 FROM c WHERE type=?1 AND slug=?2').bind('set','seeded2').first()){const b=[q("INSERT INTO c VALUES('set','seeded2','','','','',0)")];for(const[t,sl,x]of ART)b.push(q("UPDATE c SET vi_b=CASE WHEN COALESCE(vi_b,'')='' THEN ?1 ELSE vi_b||char(10)||char(10)||?1 END WHERE type=?2 AND slug=?3").bind(x,t,sl));await env.DB.batch(b)}
 if(!await q('SELECT 1 FROM c WHERE type=?1 AND slug=?2').bind('set','seeded3').first()){
  const b=[q("INSERT INTO c VALUES('set','seeded3','','','','',0)")];let n=0;
  const im=(sl,k)=>{const id='i_'+sl.replace(/-/g,'_');b.push(q("INSERT OR REPLACE INTO im VALUES(?1,'image/svg+xml',?2)").bind(id,btoa(ILL(k,190+(n++*13)%60))));return'/img/'+id};
  for(const r of PD){const[t,sl,k,a,bu,u]=r.split('|');b.push(q("UPDATE c SET vi_b=CASE WHEN COALESCE(vi_b,'')='' THEN ?1 WHEN vi_b NOT LIKE '%## %' THEN vi_b||char(10)||char(10)||?1 ELSE vi_b END WHERE type=?2 AND slug=?3").bind(im(sl,k)+'\n\n'+a+'\n## Đặc điểm nổi bật\n'+bu.split(';').map(y=>'- '+y).join('\n')+'\n## Ứng dụng\n'+u+'\n## Tư vấn và báo giá\n'+CTA,t=='p'?'product':'industry',sl))}
  for(const[ty,sl,k]of[['product','mechanical-seals-for-pumps','s'],['product','dry-gas-seals-for-compressors','g'],['industry','oil-and-gas','p'],['industry','refinery','p']])b.push(q("UPDATE c SET vi_b=?1||char(10)||char(10)||vi_b WHERE type=?2 AND slug=?3 AND vi_b NOT LIKE '/img/%'").bind(im(sl,k),ty,sl));
  let ts=Date.now();for(const[sl,vt,et,x]of NW)b.push(q('INSERT OR IGNORE INTO c VALUES(?1,?2,?3,?4,?5,?6,?7)').bind('news',sl,vt,im(sl,'n')+'\n\n'+x,et,'',ts--));
  b.push(q("INSERT OR IGNORE INTO c VALUES('set','about','Giới thiệu công ty','','About Us','',0)"),q("UPDATE c SET vi_b=?1 WHERE type='set' AND slug='about' AND COALESCE(vi_b,'')=''").bind(im('about','n')+'\n\n'+ABOUT));
  await env.DB.batch(b)}
 init.d=1}
const one=(env,t,s)=>env.DB.prepare('SELECT * FROM c WHERE type=?1 AND slug=?2').bind(t,s).first();

export const onRequest=async({request,env})=>{
 if(!env.DB)return H('Chưa gắn database D1 với tên biến DB.',500);await init(env);
 const u=new URL(request.url),s=u.origin;let p=u.pathname.replace(/\/+$/,'')||'/';
 if(p.startsWith('/admin'))return admin(request,env,u,p);
 if(p.startsWith('/img/')){const r=await env.DB.prepare('SELECT * FROM im WHERE id=?1').bind(p.slice(5)).first();return r?new Response(Uint8Array.from(atob(r.d),c=>c.charCodeAt(0)),{headers:{'content-type':r.ct,'cache-control':'public,max-age=31536000,immutable'}}):H('',404)}
 const D={};for(const r of(await env.DB.prepare('SELECT * FROM c ORDER BY ts').all()).results)(D[r.type]??=[]).push(r);D.news?.reverse();
 if(p=='/robots.txt')return new Response(`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${s}/sitemap.xml`);
 if(p=='/sitemap.xml'){const ps=['/','/products','/industries','/news','/contact'];for(const t in RV)for(const r of D[t]||[])ps.push('/'+RV[t]+'/'+r.slug);return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${ps.flatMap(x=>['vi','en'].map(l=>`<url><loc>${s}${U(l,x)}</loc></url>`)).join('')}</urlset>`,{headers:{'content-type':'application/xml'}})}
 let l='vi';if(p=='/en'||p.startsWith('/en/')){l='en';p=p.slice(3)||'/'}
 const st=Object.fromEntries((D.set||[]).map(r=>[r.slug,r])),S=k=>{const r=st[k];return r&&(r[l+'_t']||r[l+'_b'])?[r[l+'_t'],r[l+'_b']]:DEF[k][l]},Nl=N[l],nm=r=>E(r[l+'_t']||r.vi_t);
 const lg=st.logo?pic(st.logo):'',fv=st.favicon?pic(st.favicon):'',logo=lg?`<img src="${E(lg)}" alt="SNS-VN" style="height:50px;display:block">`:'SNS-VN';
 const lst=(t,n=99)=>(D[t]||[]).slice(0,n).map(r=>`<li><a href="${U(l,'/'+RV[t]+'/'+r.slug)}">${nm(r)}</a></li>`).join('');
 const nt=LN(S('note')[1]).filter(x=>!IMG.test(x)).map(x=>`<div>${E(x)}</div>`).join('');
 const mi=(k,x)=>`<li><a href="${U(l,'/'+k)}">${Nl[k]}</a>${x?`<ul>${x}</ul>`:''}</li>`;
 const[ct,cb]=S('contact'),[,fb]=S('foot'),org={'@context':'https://schema.org','@type':'Organization',name:'SNS-VN',url:s};
 const P=(t,d,b,x={})=>H(`<!doctype html><html lang="${l}"><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>${E(t)} | SNS-VN</title><meta name=description content="${E(d)}">${fv?`<link rel=icon href="${E(fv)}">`:''}<link rel=canonical href="${s}${U(l,p)}"><link rel=alternate hreflang=vi href="${s}${U('vi',p)}"><link rel=alternate hreflang=en href="${s}${U('en',p)}"><link rel=alternate hreflang=x-default href="${s}${U('vi',p)}"><meta property=og:title content="${E(t)}"><meta property=og:description content="${E(d)}">${x.i?`<meta property=og:image content="${s}${E(x.i)}">`:''}<style>${CSS}</style><script type=application/ld+json>${JSON.stringify(x.ld||org).replace(/</g,'\\u003c')}</script></head><body><header><div class=w><a class=lg href="${U(l,'/')}">${logo}</a>${nt?`<div class=nt>${nt}</div>`:''}<nav><ul>${mi('products',lst('product'))}${mi('industries',lst('industry'))}${mi('news',lst('news',10))}${mi('contact','')}<li><a href="${U(l=='vi'?'en':'vi',p)}" style="border:1px solid var(--b);border-radius:4px;padding:6px 12px;margin-left:10px;color:var(--b);font-weight:700">${Nl.lang}</a></li></ul></nav></div></header>${b}<footer><div class=w><div class=fg><div><h5>${Nl.products}</h5><ul>${lst('product')}</ul></div><div><h5>${Nl.industries}</h5><ul>${lst('industry')}</ul></div><div><h5>${Nl.news}</h5><ul>${lst('news',10)}</ul></div><div><h5>${E(ct)}</h5><div class=pl>${E(NT(cb))}</div></div></div><div class=fd><div class=lg style="margin-bottom:10px">${logo}</div>${E(NT(fb))}</div></div><div class=cp><div class=w>Copyright © 2026 SNS-VN. All rights reserved.</div></div></footer></body></html>`);
 const card=(k,r)=>{const i=pic(r);return`<a class=cd href="${U(l,'/'+k+'/'+r.slug)}">${i?`<img src="${E(i)}" alt="${nm(r)}" loading=lazy>`:'<div class=im></div>'}<h3>${nm(r)}</h3></a>`};
 const m=p.split('/').filter(Boolean),k=m[0];
 if(!m.length){const sl=[1,2,3].map(n=>{const r=(D.slide||[]).find(x=>x.slug=='s'+n),d=SLD[n-1],j=l=='vi'?0:1;return r&&(r.vi_t||r.en_t)?{t:r[l+'_t']||r.vi_t,b:txt(r[l+'_b']||r.vi_b,300),i:pic(r)}:{t:d[j],b:d[2+j],i:''}});
  const sec=(t,a)=>`<section${t=='industry'?' class=alt':''}><div class=w><h2>${Nl[a]}</h2><div class=gr>${(D[t]||[]).slice(0,10).map(r=>card(a,r)).join('')}</div></div></section>`;
  const[ht,hb]=[sl[0].t,sl[0].b];
  return P(ht,hb,`<div class=hero>${sl.map((x,j)=>`<div class="sl${j?'':' on'}"><div class=w><div>${j?'<h2>':'<h1>'}${E(x.t)}${j?'</h2>':'</h1>'}<p>${E(x.b)}</p><a class=bt href="${U(l,'/products')}">${Nl.more}</a></div>${x.i?`<img src="${E(x.i)}" alt="${E(x.t)}">`:''}</div></div>`).join('')}<div class=ct><div class=w><div class=dts>${sl.map((_,j)=>`<span class="dt${j?'':' on'}"></span>`).join('')}</div><div><button id=pv aria-label=prev>‹</button><button id=nx aria-label=next>›</button></div></div></div></div>${sec('product','products')}${sec('industry','industries')}${D.news?.length?`<section class=alt><div class=w><h2>${Nl.news}</h2><div class=gr>${D.news.slice(0,4).map(r=>card('news',r)).join('')}</div></div></section>`:''}<script>var i=0,s=document.querySelectorAll('.sl'),d=document.querySelectorAll('.dt'),t;function go(n){i=(n+s.length)%s.length;s.forEach(function(e,k){e.classList.toggle('on',k==i);d[k].classList.toggle('on',k==i)});clearInterval(t);t=setInterval(function(){go(i+1)},2000)}document.getElementById('pv').onclick=function(){go(i-1)};document.getElementById('nx').onclick=function(){go(i+1)};d.forEach(function(e,k){e.onclick=function(){go(k)}});go(0)</script>`)}
 if(R[k]){const rows=D[R[k]]||[];
  if(!m[1])return P(Nl[k],Nl[k],`<section><div class=w><h1>${Nl[k]}</h1><div class=gr>${rows.map(r=>card(k,r)).join('')}</div></div></section>`);
  const r=rows.find(x=>x.slug==m[1]);
  if(r&&l=='en'&&env.AI&&!LN(r.en_b).some(x=>!IMG.test(x))&&LN(r.vi_b).some(x=>!IMG.test(x))){const x=await tr(env,r.vi_b,'vi','en');if(x!=r.vi_b){r.en_b=x;await env.DB.prepare('UPDATE c SET en_b=?1 WHERE type=?2 AND slug=?3').bind(x,r.type,r.slug).run()}}
  if(r){const t=r[l+'_t']||r.vi_t,b=r[l+'_b']||r.vi_b,i=pic(r);
   return P(t,txt(b),`<section><div class="w sd"><aside><ul>${rows.map(x=>`<li><a class="${x==r?'on':''}" href="${U(l,'/'+k+'/'+x.slug)}">${nm(x)}</a></li>`).join('')}</ul></aside><div class=ar><h1>${E(t)}</h1>${img(b)?'':i?`<img src="${E(i)}" alt="${E(t)}">`:''}${B(b)}</div></div></section>`,{i,ld:{'@context':'https://schema.org','@type':k=='news'?'Article':k=='products'?'Product':'Service',[k=='news'?'headline':'name']:t,description:txt(b),image:i?s+i:undefined}})}}
 if(k=='about'||k=='contact'){const A=st.about;if(l=='en'&&env.AI&&A&&LN(A.vi_b).some(x=>!IMG.test(x))&&!LN(A.en_b).some(x=>!IMG.test(x))){const x=await tr(env,A.vi_b,'vi','en');if(x!=A.vi_b){A.en_b=x;await env.DB.prepare('UPDATE c SET en_b=?1 WHERE type=?2 AND slug=?3').bind(x,'set','about').run()}}const[at,ab]=S('about'),[t,b]=S('contact');return P(t,txt(ab)||txt(b),`<section><div class="w ar"><h1>${E(t)}</h1><h2>${E(at)}</h2>${B(ab)}<h2>${l=='vi'?'Thông tin liên hệ':'Contact information'}</h2>${B(b)}</div></section>`)}
 return H('Not found',404)};

const TB={product:['Sản phẩm','product'],industry:['Ứng dụng (Industries)','industry'],news:['Tin tức','news'],us:['Liên hệ','set',['about','contact']],slide:['Banner (3 hình)','slide',['s1','s2','s3']],brand:['Logo / Favicon / Ghi chú / Chân trang','set',['logo','favicon','note','foot']]};
const FL={s1:'Banner 1',s2:'Banner 2',s3:'Banner 3',about:'Giới thiệu công ty',contact:'Địa chỉ, điện thoại, email',logo:'Logo (chỉ cần ảnh)',favicon:'Favicon (chỉ cần ảnh)',note:'Ghi chú cạnh logo (mỗi dòng 1 ghi chú)',foot:'Mô tả chân trang'};
async function admin(req,env,u,p){
 const pw=env.ADMIN_PASSWORD;if(!pw)return H('Hãy tạo biến ADMIN_PASSWORD trong Cloudflare.');
 const tok=await sha(pw+'sns-vn'),ok=(req.headers.get('Cookie')||'').includes('t='+tok),go=x=>new Response(null,{status:302,headers:{Location:x}});
 if(p=='/admin/login'&&req.method=='POST'){const f=await req.formData();return f.get('p')==pw?new Response(null,{status:302,headers:{Location:'/admin','Set-Cookie':`t=${tok};Path=/;HttpOnly;Secure;SameSite=Strict;Max-Age=2592000`}}):go('/admin')}
 if(p=='/admin/logout')return new Response(null,{status:302,headers:{Location:'/admin','Set-Cookie':'t=;Path=/;Max-Age=0'}});
 if(!ok)return H(`<meta name=viewport content="width=device-width"><body style="font-family:sans-serif;max-width:320px;margin:90px auto"><h2>SNS-VN Admin</h2><form method=post action=/admin/login><input type=password name=p placeholder="Mật khẩu" style="width:100%;padding:10px"><br><br><button style="padding:10px 20px">Đăng nhập</button></form>`);
 if(p=='/admin/up'&&req.method=='POST'){const d=await req.text(),m=d.match(/^data:(image\/[a-z+.-]+);base64,([A-Za-z0-9+\/=]+)$/);if(!m||d.length>1.95e6)return new Response('Ảnh quá lớn hoặc sai định dạng',{status:400});const id=crypto.randomUUID().replace(/-/g,'').slice(0,12);await env.DB.prepare('INSERT INTO im VALUES(?1,?2,?3)').bind(id,m[1],m[2]).run();return new Response('/img/'+id)}
 if(req.method=='POST'){const f=await req.formData(),g=n=>(f.get(n)||'').trim(),ty=g('type'),tb=g('s'),lg=g('lang')=='en'?'en':'vi';
  if(!Object.values(TB).some(x=>x[1]==ty))return go('/admin');
  if(p=='/admin/del')await env.DB.prepare('DELETE FROM c WHERE type=?1 AND slug=?2').bind(ty,g('slug')).run();
  if(p=='/admin/save'){const o=lg=='vi'?'en':'vi',t=g('t'),b=g('b').replace(/\r/g,''),slug=SL(g('slug'))||Date.now().toString(36),old=await one(env,ty,slug),[x,y]=await Promise.all([tr(env,t,lg,o),tr(env,b,lg,o)]),r=lg=='vi'?[t,b,x,y]:[x,y,t,b];
   await env.DB.prepare('INSERT OR REPLACE INTO c VALUES(?1,?2,?3,?4,?5,?6,?7)').bind(ty,slug,...r,old?old.ts:Date.now()).run()}
  return go('/admin?s='+tb+'&lang='+lg)}
 const q=u.searchParams,k=TB[q.get('s')]?q.get('s'):'product',lg=q.get('lang')=='en'?'en':'vi',vi=lg=='vi',[lb,ty,fx]=TB[k],base='/admin?s='+k+'&lang='+lg;
 const rows=(await env.DB.prepare('SELECT slug,vi_t,en_t FROM c WHERE type=?1 ORDER BY ts').bind(ty).all()).results,items=fx?fx.map(x=>rows.find(r=>r.slug==x)||{slug:x}):rows;
 const cur=q.get('e')||(fx?fx[0]:''),v=(cur&&await one(env,ty,cur))||{},one1=k=='slide'||cur=='logo'||cur=='favicon';
 return H(`<meta name=viewport content="width=device-width"><title>Admin</title><style>body{font-family:sans-serif;max-width:960px;margin:20px auto;padding:0 16px}label{display:block;margin:10px 0;font-weight:600}input,textarea,select{width:100%;padding:8px;font:inherit;margin-top:4px}table{width:100%;border-collapse:collapse}td{padding:6px;border-bottom:1px solid #ddd}button{padding:10px 22px;cursor:pointer}small{color:#666;font-weight:400}.tb a{display:inline-block;padding:8px 12px;margin:2px;background:#eef2f6;border-radius:4px;text-decoration:none;color:#0b5cb5}.tb .on{background:#0b5cb5;color:#fff}</style>
<h2>SNS-VN Admin &nbsp;<a href="/" style="font-size:14px">Xem website</a> &nbsp;<a href="/admin/logout" style="font-size:14px">Đăng xuất</a></h2><div class=tb>${Object.entries(TB).map(([a,b])=>`<a href="/admin?s=${a}&lang=${lg}" class="${a==k?'on':''}">${b[0]}</a>`).join('')}</div>
<div class=tb>Ngôn ngữ soạn thảo: <a href="/admin?s=${k}&lang=vi" class="${vi?'on':''}">Tiếng Việt</a><a href="/admin?s=${k}&lang=en" class="${vi?'':'on'}">English</a></div>
<h3>${lb}: ${v.slug?'Sửa':'Thêm mới'}</h3><form method=post action=/admin/save><input type=hidden name=type value="${ty}"><input type=hidden name=s value="${k}"><input type=hidden name=lang value="${lg}">
${fx?`<label>Mục<select name=slug onchange="location='${base}&e='+this.value">${fx.map(x=>`<option value=${x} ${x==cur?'selected':''}>${FL[x]}</option>`).join('')}</select></label>`:`<label>Slug (đường dẫn, không dấu, vd: phot-co-khi-cm)<input name=slug value="${E(v.slug||'')}"></label>`}
<label>Tải ảnh lên (JPG/PNG), link ảnh tự chèn vào đầu nội dung <input type=file accept="image/*" ${one1?'data-one=1':''} onchange="up(this)"></label>
<small>Bạn soạn bằng ${vi?'tiếng Việt':'tiếng Anh'}, hệ thống tự dịch sang ${vi?'tiếng Anh':'tiếng Việt'} khi bấm Lưu (bản dịch cũ sẽ bị thay). Dòng bắt đầu "## " là tiêu đề nhỏ, dòng bắt đầu "- " là gạch đầu dòng, dòng /img/... là hình ảnh. Banner: mỗi mục 1 ảnh + tiêu đề + mô tả.</small>
<label>Tiêu đề (${vi?'Tiếng Việt':'English'})<input name=t value="${E(v[lg+'_t']||'')}"></label><label>Nội dung (${vi?'Tiếng Việt':'English'})<textarea name=b rows=14>${E(v[lg+'_b']||'')}</textarea></label><button>Lưu</button></form>
<h3>Danh sách</h3><table>${items.map(r=>`<tr><td>${E(r[lg+'_t']||FL[r.slug]||r.slug)}<br><small>${E(FL[r.slug]||r.slug)}</small></td><td><a href="${base}&e=${E(r.slug)}">Sửa</a></td>${fx?'':`<td><form method=post action=/admin/del onsubmit="return confirm('Xóa?')"><input type=hidden name=type value="${ty}"><input type=hidden name=s value="${k}"><input type=hidden name=lang value="${lg}"><input type=hidden name=slug value="${E(r.slug)}"><button style="padding:4px 10px;width:auto">Xóa</button></form></td>`}</tr>`).join('')}</table>
<script>async function up(n){var f=n.files[0];if(!f)return;var im=await createImageBitmap(f),k=Math.min(1,1600/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);var d=c.toDataURL(f.type=='image/png'?'image/png':'image/jpeg',.82);if(d.length>1.9e6)d=c.toDataURL('image/jpeg',.7);var r=await fetch('/admin/up',{method:'POST',body:d}),x=await r.text();if(!r.ok){alert(x);return}var a=document.querySelector('[name=b]'),t=a.value;if(n.dataset.one)t=t.split('\\n').filter(function(l){return !/^\\/img\\//.test(l.trim())}).join('\\n').trim();a.value=x+(t?'\\n\\n'+t:'')}</script>`)}
