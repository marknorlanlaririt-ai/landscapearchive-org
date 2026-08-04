/**
 * Field Notes title/dek chrome (essay bodies stay English).
 * Keys: fn.<slug>.title / fn.<slug>.dek
 */

const NOTES = [
  {
    slug: 'from-analogue-to-digital-centre-twice-removed',
    en: {
      title: 'From analogue to digital: collaboration, validation, and the centre twice removed',
      dek: 'Digital work does not replace contact with living plants. It lengthens the chain of custody for meaning. Between the walk and the viewport sits an interpretive middle, twice removed, where belief is made and too easily mistaken for observation.'
    },
    es: {
      title: 'De lo analógico a lo digital: colaboración, validación y el centro dos veces alejado',
      dek: 'El trabajo digital no reemplaza el contacto con plantas vivas. Alarga la cadena de custodia del significado. Entre el paseo y la ventana gráfica hay un medio interpretativo, dos veces alejado, donde se fabrica la creencia y se confunde demasiado fácil con observación.'
    },
    fr: {
      title: 'De l’analogue au numérique : collaboration, validation et le centre deux fois éloigné',
      dek: 'Le travail numérique ne remplace pas le contact avec les plantes vivantes. Il allonge la chaîne de custody du sens. Entre la marche et la fenêtre d’affichage se trouve un milieu interprétatif, deux fois éloigné, où la croyance se fabrique et se confond trop facilement avec l’observation.'
    },
    de: {
      title: 'Vom Analogen zum Digitalen: Kollaboration, Validierung und das zweimal entfernte Zentrum',
      dek: 'Digitale Arbeit ersetzt nicht den Kontakt mit lebenden Pflanzen. Sie verlängert die Kette der Bedeutungskontrolle. Zwischen Spaziergang und Viewport liegt eine interpretative Mitte, zweimal entfernt, wo Glaube hergestellt und zu leicht mit Beobachtung verwechselt wird.'
    },
    pt: {
      title: 'Do analógico ao digital: colaboração, validação e o centro duas vezes removido',
      dek: 'O trabalho digital não substitui o contacto com plantas vivas. Alonga a cadeia de custódia do significado. Entre a caminhada e a viewport há um meio interpretativo, duas vezes removido, onde a crença se fabrica e se confunde com observação com demasiada facilidade.'
    },
    zh: {
      title: '从模拟到数字：协作、验证与被两次移开的中心',
      dek: '数字工作并不取代与活体植物的接触。它延长了意义的保管链。在步行与视口之间，是被两次移开的解释性中间地带：信念在此被制造，又太容易被误认为观察。'
    },
    ja: {
      title: 'アナログからデジタルへ：協働、検証、そして二度遠ざけられた中心',
      dek: 'デジタル作業は生きた植物との接触を置き換えない。意味の保管連鎖を長くする。散歩とビューポートのあいだには、二度遠ざけられた解釈の中間があり、そこで信念が作られ、観察と取り違えられやすい。'
    },
    ko: {
      title: '아날로그에서 디지털로: 협업, 검증, 그리고 두 번 멀어진 중심',
      dek: '디지털 작업은 살아 있는 식물과의 접촉을 대체하지 않는다. 의미의 보관 사슬을 늘린다. 산책과 뷰포트 사이에는 두 번 멀어진 해석의 중간이 있고, 그곳에서 믿음이 만들어지며 관찰과 너무 쉽게 혼동된다.'
    },
    ms: {
      title: 'Dari analog ke digital: kolaborasi, pengesahan, dan pusat yang dijauhkan dua kali',
      dek: 'Kerja digital tidak menggantikan sentuhan dengan tumbuhan hidup. Ia memanjangkan rantaian jagaan makna. Antara jalan kaki dan viewport terletak tengah tafsiran, dijauhkan dua kali, di mana kepercayaan dibuat dan terlalu mudah disalah anggap sebagai pemerhatian.'
    },
    it: {
      title: 'Dall’analogico al digitale: collaborazione, validazione e il centro due volte allontanato',
      dek: 'Il lavoro digitale non sostituisce il contatto con le piante vive. Allunga la catena di custodia del significato. Tra la passeggiata e la viewport c’è un mezzo interpretativo, due volte allontanato, dove la credenza si fabbrica e si confonde troppo facilmente con l’osservazione.'
    },
    ar: {
      title: 'من التناظري إلى الرقمي: التعاون والتحقق والمركز المُبعَد مرتين',
      dek: 'العمل الرقمي لا يستبدل الاتصال بالنباتات الحية. إنه يطيل سلسلة حراسة المعنى. بين المشي ونافذة العرض وسط تفسيري مُبعَد مرتين، حيث تُصنَع القناعة ويُخلط بينها وبين الملاحظة بسهولة.'
    },
    hi: {
      title: 'एनालॉग से डिजिटल तक: सहयोग, सत्यापन, और दो बार हटाया गया केंद्र',
      dek: 'डिजिटल काम जीवित पौधों के संपर्क की जगह नहीं लेता। यह अर्थ की अभिरक्षा श्रृंखला को लंबा करता है। सैर और व्यूपोर्ट के बीच व्याख्यात्मक मध्य है, दो बार हटाया हुआ, जहाँ विश्वास बनता है और अवलोकन समझ लिया जाता है।'
    },
    id: {
      title: 'Dari analog ke digital: kolaborasi, validasi, dan pusat yang dijauhkan dua kali',
      dek: 'Kerja digital tidak menggantikan kontak dengan tumbuhan hidup. Ia memanjangkan rantai kustodi makna. Antara jalan kaki dan viewport ada tengah interpretatif, dijauhkan dua kali, tempat keyakinan dibuat dan terlalu mudah disangka observasi.'
    },
    nl: {
      title: 'Van analoog naar digitaal: samenwerking, validatie en het tweemaal verwijderde centrum',
      dek: 'Digitaal werk vervangt geen contact met levende planten. Het verlengt de keten van betekenisbewaring. Tussen wandeling en viewport ligt een interpretatief midden, tweemaal verwijderd, waar geloof wordt gemaakt en te makkelijk voor observatie wordt aangezien.'
    },
    ru: {
      title: 'От аналогового к цифровому: сотрудничество, валидация и центр, удалённый дважды',
      dek: 'Цифровая работа не заменяет контакт с живыми растениями. Она удлиняет цепочку хранения смысла. Между прогулкой и вьюпортом — интерпретативная середина, дважды удалённая, где вера производится и слишком легко принимается за наблюдение.'
    },
    tr: {
      title: 'Analogdan dijitale: işbirliği, doğrulama ve iki kez uzaklaştırılmış merkez',
      dek: 'Dijital çalışma canlı bitkilerle teması yerine koymaz. Anlamın zincirini uzatır. Yürüyüş ile görünüm penceresi arasında, iki kez uzaklaştırılmış yorumsal bir orta vardır; inanç orada üretilir ve gözlem sanılır.'
    },
    th: {
      title: 'จากอนาล็อกสู่ดิจิทัล: การร่วมมือ การตรวจยืนยัน และศูนย์กลางที่ถูกย้ายออกสองครั้ง',
      dek: 'งานดิจิทัลไม่ได้แทนที่การสัมผัสพืชมีชีวิต มันยืดห่วงโซ่การดูแลความหมาย ระหว่างการเดินกับวิวพอร์ตคือกลางแห่งการตีความที่ถูกย้ายออกสองครั้ง ที่ซึ่งความเชื่อถูกสร้างและสับสนกับการสังเกตได้ง่าย'
    },
    vi: {
      title: 'Từ analog đến số: cộng tác, xác thực, và trung tâm bị đẩy xa hai lần',
      dek: 'Công việc số không thay thế tiếp xúc với cây sống. Nó kéo dài chuỗi giám sát ý nghĩa. Giữa cuộc đi bộ và viewport là khoảng giữa diễn giải, bị đẩy xa hai lần, nơi niềm tin được tạo ra và dễ bị nhầm là quan sát.'
    }
  },
  {
    slug: 'outsourcing-truths-nail-and-agent',
    en: {
      title: 'Outsourcing truths: the nail and the agent',
      dek: 'A nail extends the hand. Agentic software proposes what the hand should mean. Landscape practice is learning that difference under pressure from tools, budgets, labour, politics, and time, and under a harder question still: where living nature ends and digital nature begins.'
    },
    es: {
      title: 'Externalizar verdades: el clavo y el agente',
      dek: 'Un clavo prolonga la mano. El software agentico propone qué debe significar la mano. La práctica del paisaje aprende esa diferencia bajo presión de herramientas, presupuestos, trabajo, política y tiempo, y ante una pregunta más dura: dónde termina la naturaleza viva y empieza la naturaleza digital.'
    },
    fr: {
      title: 'Externaliser les vérités : le clou et l’agent',
      dek: 'Un clou prolonge la main. Le logiciel agentique propose ce que la main devrait signifier. La pratique du paysage apprend cette différence sous la pression des outils, des budgets, du travail, de la politique et du temps, et face à une question plus dure encore : où finit la nature vivante et où commence la nature numérique.'
    },
    de: {
      title: 'Wahrheiten auslagern: Nagel und Agent',
      dek: 'Ein Nagel verlängert die Hand. Agentische Software schlägt vor, was die Hand bedeuten soll. Die Landschaftspraxis lernt diesen Unterschied unter Druck von Werkzeugen, Budgets, Arbeit, Politik und Zeit, und unter der härteren Frage: wo endet lebendige Natur und wo beginnt digitale Natur.'
    },
    pt: {
      title: 'Terceirizar verdades: o prego e o agente',
      dek: 'Um prego prolonga a mão. O software agêntico propõe o que a mão deve significar. A prática da paisagem aprende essa diferença sob pressão de ferramentas, orçamentos, trabalho, política e tempo, e perante uma pergunta mais dura: onde termina a natureza viva e começa a natureza digital.'
    },
    zh: {
      title: '外包真相：钉子与智能体',
      dek: '钉子延长手的力量。智能体软件则提出手应当意味什么。景观实践在工具、预算、人力、政治与时间的压力下学习这一差别，并面对更难的问题：活的自然与数字自然之间的界线在哪里。'
    },
    ja: {
      title: '真実の外部委託：釘とエージェント',
      dek: '釘は手を延長する。エージェンティックなソフトウェアは、手が何を意味すべきかを提案する。景観実務は道具・予算・労働・政治・時間の圧力下でその差を学び、さらに難しい問い——生きた自然とデジタルな自然の境界——に向き合う。'
    },
    ko: {
      title: '진실을 외주화하기: 못과 에이전트',
      dek: '못은 손을 연장한다. 에이전트형 소프트웨어는 손이 무엇을 의미해야 하는지 제안한다. 경관 실무는 도구·예산·노동·정치·시간의 압력 속에서 그 차이를 배우며, 더 어려운 질문—살아있는 자연과 디지털 자연의 경계—에 직면한다.'
    },
    ms: {
      title: 'Menyumber luar kebenaran: paku dan ejen',
      dek: 'Paku memanjangkan tangan. Perisian agen mencadangkan apa yang tangan patut bermaksud. Amalan landskap mempelajari perbezaan itu di bawah tekanan alat, belanjawan, buruh, politik dan masa, serta soalan yang lebih sukar: di mana alam hidup berakhir dan alam digital bermula.'
    },
    it: {
      title: 'Esternalizzare le verità: il chiodo e l’agente',
      dek: 'Un chiodo prolunga la mano. Il software agentico propone cosa la mano dovrebbe significare. La pratica del paesaggio impara quella differenza sotto la pressione di strumenti, budget, lavoro, politica e tempo, e davanti a una domanda più dura: dove finisce la natura vivente e dove inizia la natura digitale.'
    },
    ar: {
      title: 'تعهيد الحقائق: المسمار والوكيل',
      dek: 'المسمار يمدّ اليد. أما البرمجيات الوكيلة فتقترح ما ينبغي أن تعنيه اليد. تتعلم ممارسة المشهد هذا الفرق تحت ضغط الأدوات والميزانيات والعمل والسياسة والوقت، وأمام سؤال أصعب: أين تنتهي الطبيعة الحية وأين تبدأ الطبيعة الرقمية.'
    },
    hi: {
      title: 'सत्यों की आउटसोर्सिंग: कील और एजेंट',
      dek: 'कील हाथ को बढ़ाती है। एजेंटिक सॉफ़्टवेयर प्रस्तावित करता है कि हाथ का क्या अर्थ होना चाहिए। लैंडस्केप अभ्यास उपकरणों, बजट, श्रम, राजनीति और समय के दबाव में यह अंतर सीखता है, और एक कठिन प्रश्न के सामने: जीवित प्रकृति कहाँ समाप्त होती है और डिजिटल प्रकृति कहाँ शुरू।'
    },
    id: {
      title: 'Mengalihdayakan kebenaran: paku dan agen',
      dek: 'Paku memperpanjang tangan. Perangkat lunak agen mengusulkan apa yang seharusnya dimaksud tangan. Praktik lanskap mempelajari perbedaan itu di bawah tekanan alat, anggaran, tenaga kerja, politik, dan waktu, serta pertanyaan yang lebih sulit: di mana alam hidup berakhir dan alam digital dimulai.'
    },
    nl: {
      title: 'Waarheden uitbesteden: de spijker en de agent',
      dek: 'Een spijker verlengt de hand. Agentische software stelt voor wat de hand zou moeten betekenen. Landschapspraktijk leert dat verschil onder druk van tools, budgetten, arbeid, politiek en tijd, en onder een hardere vraag: waar eindigt levende natuur en waar begint digitale natuur.'
    },
    ru: {
      title: 'Аутсорсинг истин: гвоздь и агент',
      dek: 'Гвоздь продлевает руку. Агентное ПО предлагает, что рука должна означать. Ландшафтная практика учится этому различию под давлением инструментов, бюджетов, труда, политики и времени — и перед более трудным вопросом: где кончается живая природа и начинается цифровая.'
    },
    tr: {
      title: 'Gerçekleri dışarıya vermek: çivi ve ajan',
      dek: 'Çivi eli uzatır. Ajan yazılım elin ne anlama gelmesi gerektiğini önerir. Peyzaj pratiği araçlar, bütçeler, emek, siyaset ve zaman baskısı altında bu farkı öğrenir; daha zor soru ise şudur: canlı doğa nerede biter, dijital doğa nerede başlar.'
    },
    th: {
      title: 'เอาความจริงไปเอาท์ซอร์ส: ตะปูกับเอเจนต์',
      dek: 'ตะปูยืดมือ ซอฟต์แวร์แบบเอเจนต์เสนอว่ามือควรมีความหมายอย่างไร วิชาชีพภูมิทัศน์กำลังเรียนรู้ความต่างนั้นภายใต้แรงกดของเครื่องมือ งบ คน การเมือง และเวลา และคำถามที่ยากกว่า: ธรรมชาติที่มีชีวิตจบลงตรงไหน และธรรมชาติดิจิทัลเริ่มตรงไหน'
    },
    vi: {
      title: 'Thuê ngoài sự thật: cái đinh và tác nhân',
      dek: 'Cái đinh kéo dài bàn tay. Phần mềm tác nhân đề xuất bàn tay nên nghĩa là gì. Thực hành cảnh quan đang học sự khác biệt đó dưới áp lực công cụ, ngân sách, lao động, chính trị và thời gian, cùng câu hỏi khó hơn: ranh giới giữa thiên nhiên sống và thiên nhiên số ở đâu.'
    }
  },
  {
    slug: 'what-automation-replaces-and-cannot-sign-for',
    en: {
      title: 'What automation replaces in landscape practice',
      dek: 'AI absorbs repetitive hygiene and generic drafting so the profession keeps judgment liability and the open systems that make records trustworthy.'
    },
    es: {
      title: 'Qué sustituye la automatización en la práctica del paisaje',
      dek: 'La IA absorbe la higiene repetitiva y el dibujo genérico para que la profesión conserve el juicio, la responsabilidad y los sistemas abiertos que hacen fiables los registros.'
    },
    fr: {
      title: 'Ce que l’automatisation remplace dans la pratique du paysage',
      dek: 'L’IA absorbe l’hygiène répétitive et le dessin générique pour que la profession garde le jugement, la responsabilité et les systèmes ouverts qui rendent les archives fiables.'
    },
    de: {
      title: 'Was Automatisierung in der Landschaftspraxis ersetzt',
      dek: 'KI übernimmt repetitive Hygiene und generisches Zeichnen, damit der Beruf Urteil, Haftung und die offenen Systeme behält, die Aufzeichnungen vertrauenswürdig machen.'
    },
    pt: {
      title: 'O que a automatização substitui na prática da paisagem',
      dek: 'A IA absorve higiene repetitiva e desenho genérico para a profissão manter julgamento, responsabilidade e os sistemas abertos que tornam os registos fiáveis.'
    },
    zh: {
      title: '自动化在景观实践中取代了什么',
      dek: '人工智能承担重复的卫生核对与通用制图，使专业仍保有判断、责任，以及让记录可信的开放系统。'
    },
    ja: {
      title: '景観実務で自動化が置き換えるもの',
      dek: 'AIは反復的な衛生確認と汎用的な作図を吸収し、専門職が判断・責任・記録を信頼可能にする開かれたシステムを保持できるようにする。'
    },
    ko: {
      title: '경관 실무에서 자동화가 대체하는 것',
      dek: 'AI는 반복적인 위생 점검과 일반 제도를 흡수해, 전문직이 판단·책임·기록을 신뢰할 수 있게 하는 열린 체계를 유지하게 합니다.'
    },
    ms: {
      title: 'Apa yang diganti automasi dalam amalan landskap',
      dek: 'AI menyerap kebersihan data berulang dan lukisan generik supaya profesion mengekalkan pertimbangan, liabiliti dan sistem terbuka yang menjadikan rekod dipercayai.'
    },
    it: {
      title: 'Cosa sostituisce l’automazione nella pratica del paesaggio',
      dek: 'L’IA assorbe igiene ripetitiva e disegno generico così la professione conserva giudizio, responsabilità e i sistemi aperti che rendono affidabili i registri.'
    },
    ar: {
      title: 'ما تستبدله الأتمتة في ممارسة المشهد',
      dek: 'يمتص الذكاء الاصطناعي التنظيف المتكرر والرسم العام ليبقي المهنة على الحكم والمسؤولية والأنظمة المفتوحة التي تجعل السجلات موثوقة.'
    },
    hi: {
      title: 'लैंडस्केप अभ्यास में स्वचालन क्या प्रतिस्थापित करता है',
      dek: 'एआई दोहराव वाली सफ़ाई और सामान्य ड्राफ्टिंग ले लेता है ताकि पेशे के पास निर्णय, दायित्व और खुली प्रणालियाँ रहें जो अभिलेखों को विश्वसनीय बनाती हैं।'
    },
    id: {
      title: 'Apa yang digantikan otomasi dalam praktik lanskap',
      dek: 'AI menyerap kebersihan berulang dan drafting generik agar profesi mempertahankan penilaian, tanggung jawab, dan sistem terbuka yang membuat catatan dapat dipercaya.'
    },
    nl: {
      title: 'Wat automatisering vervangt in landschapspraktijk',
      dek: 'AI neemt repetitieve hygiëne en generiek tekenen over zodat het vak oordeel, aansprakelijkheid en de open systemen houdt die records betrouwbaar maken.'
    },
    ru: {
      title: 'Что автоматизация заменяет в ландшафтной практике',
      dek: 'ИИ берёт на себя повторяющуюся гигиену и типовое черчение, чтобы профессия сохраняла суждение, ответственность и открытые системы, делающие записи достоверными.'
    },
    tr: {
      title: 'Peyzaj pratiğinde otomasyonun yerine geçtiği şey',
      dek: 'YZ tekrarlayan hijyen ve jenerik çizimi üstlenir; meslek yargı, sorumluluk ve kayıtları güvenilir kılan açık sistemleri elinde tutar.'
    },
    th: {
      title: 'สิ่งที่ระบบอัตโนมัติแทนที่ในการปฏิบัติภูมิทัศน์',
      dek: 'เอไอรับงานตรวจข้อมูลซ้ำและการร่างทั่วไป เพื่อให้วิชาชีพคงไว้ซึ่งการตัดสิน ความรับผิด และระบบเปิดที่ทำให้บันทึกน่าเชื่อถือ'
    },
    vi: {
      title: 'Tự động hóa thay thế điều gì trong thực hành cảnh quan',
      dek: 'AI hấp thụ vệ sinh dữ liệu lặp lại và bản vẽ chung để nghề giữ phán đoán, trách nhiệm và các hệ thống mở làm hồ sơ đáng tin.'
    }
  },
  {
    slug: 'consequential-data-time-and-infrastructure',
    en: {
      title: 'Consequential data, time, and the infrastructure we cannot postpone',
      dek: 'Landscape records do not become consequential because they are digital. They become consequential when time, infrastructure, and professional obligation meet, and that meeting is no longer optional.'
    },
    es: {
      title: 'Datos con consecuencias, tiempo e infraestructura que no podemos aplazar',
      dek: 'Los registros del paisaje no se vuelven trascendentales por ser digitales. Lo son cuando el tiempo, la infraestructura y la obligación profesional coinciden, y esa coincidencia ya no es opcional.'
    },
    fr: {
      title: 'Données à conséquences, temps et infrastructure qu’on ne peut différer',
      dek: 'Les archives de paysage ne deviennent pas déterminantes parce qu’elles sont numériques. Elles le deviennent quand le temps, l’infrastructure et l’obligation professionnelle se rencontrent, et cette rencontre n’est plus facultative.'
    },
    de: {
      title: 'Folgenreiche Daten, Zeit und Infrastruktur, die wir nicht aufschieben können',
      dek: 'Landschaftsdaten werden nicht folgenschwer, weil sie digital sind. Sie werden es, wenn Zeit, Infrastruktur und berufliche Pflicht zusammentreffen, und dieses Zusammentreffen ist nicht mehr optional.'
    },
    pt: {
      title: 'Dados com consequência, tempo e a infraestrutura que não podemos adiar',
      dek: 'Registos de paisagem não se tornam consequentes por serem digitais. Tornam se quando tempo, infraestrutura e obrigação profissional se encontram, e esse encontro já não é opcional.'
    },
    zh: {
      title: '有后果的数据、时间与不可推迟的基础设施',
      dek: '景观记录并不因数字化而具有后果。当时间、基础设施与专业义务汇合时，后果才会出现，而这一汇合已不再可选。'
    },
    ja: {
      title: '帰結をもたらすデータ、時間、先送りできない基盤',
      dek: '景観の記録はデジタルであるから帰結を持つわけではない。時間と基盤と専門職の義務が交わるときに帰結となり、その交わりはもはや任意ではない。'
    },
    ko: {
      title: '결과 있는 데이터, 시간, 미룰 수 없는 인프라',
      dek: '경관 기록은 디지털이라서 결과가 생기지 않습니다. 시간, 인프라, 전문직 의무가 만날 때 결과가 생기며, 그 만남은 더 이상 선택이 아닙니다.'
    },
    ms: {
      title: 'Data berkesan, masa, dan infrastruktur yang tidak boleh ditangguhkan',
      dek: 'Rekod landskap tidak menjadi berkesan kerana digital. Ia menjadi berkesan apabila masa, infrastruktur, dan kewajipan profesional bertemu, dan pertemuan itu tidak lagi pilihan.'
    },
    it: {
      title: 'Dati consequenziali, tempo e infrastruttura che non possiamo rinviare',
      dek: 'I registri del paesaggio non diventano consequenziali perché digitali. Lo diventano quando tempo, infrastruttura e obbligo professionale si incontrano, e quell’incontro non è più facoltativo.'
    },
    ar: {
      title: 'بيانات ذات عواقب، والزمن، والبنية التي لا تؤجَّل',
      dek: 'سجلات المشهد لا تصبح ذات عواقب لأنها رقمية. تصبح كذلك حين يلتقي الزمن والبنية والواجب المهني، وذلك اللقاء لم يعد اختيارياً.'
    },
    hi: {
      title: 'परिणामयुक्त डेटा, समय, और वह अवसंरचना जिसे टाला नहीं जा सकता',
      dek: 'लैंडस्केप अभिलेख डिजिटल होने से परिणाम नहीं बनते। समय, अवसंरचना और पेशेवर दायित्व के मिलने पर बनते हैं, और वह मिलन अब वैकल्पिक नहीं।'
    },
    id: {
      title: 'Data berkonsekuensi, waktu, dan infrastruktur yang tak bisa ditunda',
      dek: 'Catatan lanskap tidak menjadi berkonsekuensi karena digital. Menjadi demikian saat waktu, infrastruktur, dan kewajiban profesional bertemu, dan pertemuan itu tidak lagi opsional.'
    },
    nl: {
      title: 'Gevolgrijke data, tijd en infrastructuur die we niet kunnen uitstellen',
      dek: 'Landschapsrecords worden niet gevolgrijk omdat ze digitaal zijn. Ze worden dat wanneer tijd, infrastructuur en professionele plicht samenkomen, en die samenkomst is niet langer optioneel.'
    },
    ru: {
      title: 'Данные с последствиями, время и инфраструктура, которую нельзя откладывать',
      dek: 'Ландшафтные записи не становятся значимыми оттого, что они цифровые. Они становятся такими, когда встречаются время, инфраструктура и профессиональный долг, и эта встреча уже не добровольна.'
    },
    tr: {
      title: 'Sonuç doğuran veri, zaman ve ertelemeyeceğimiz altyapı',
      dek: 'Peyzaj kayıtları dijital oldukları için sonuç doğurmaz. Zaman, altyapı ve mesleki yükümlülük buluştuğunda sonuç doğurur; o buluşma artık isteğe bağlı değildir.'
    },
    th: {
      title: 'ข้อมูลที่มีผลตามมา เวลา และโครงสร้างพื้นฐานที่เลื่อนไม่ได้',
      dek: 'บันทึกภูมิทัศน์ไม่ได้มีผลเพราะเป็นดิจิทัล แต่เมื่อเวลา โครงสร้างพื้นฐาน และหน้าที่วิชาชีพมาบรรจบกัน และการบรรจบนั้นไม่เป็นทางเลือกอีกต่อไป'
    },
    vi: {
      title: 'Dữ liệu có hậu quả, thời gian, và hạ tầng không thể trì hoãn',
      dek: 'Hồ sơ cảnh quan không trở nên có hậu quả vì mang tính số. Chúng trở nên như vậy khi thời gian, hạ tầng và nghĩa vụ nghề nghiệp gặp nhau, và cuộc gặp ấy không còn tùy chọn.'
    }
  },
  {
    slug: 'meaning-between-data-and-computation',
    en: {
      title: 'Meaning between data and computation',
      dek: 'Raw records and generative models face opposite directions on the same coin; neither yields consequence without interpretive work.'
    },
    es: {
      title: 'Sentido entre datos y computación',
      dek: 'Los registros brutos y los modelos generativos miran en direcciones opuestas; ninguno produce consecuencia sin trabajo interpretativo.'
    },
    fr: {
      title: 'Le sens entre données et calcul',
      dek: 'Les enregistrements bruts et les modèles génératifs vont en directions opposées ; aucun n’a de conséquence sans travail interprétatif.'
    },
    de: {
      title: 'Bedeutung zwischen Daten und Berechnung',
      dek: 'Rohdaten und generative Modelle zeigen entgegengesetzte Richtungen; ohne interpretative Arbeit bleibt beides folgenlos.'
    },
    pt: {
      title: 'Sentido entre dados e computação',
      dek: 'Registos brutos e modelos generativos apontam em sentidos opostos; nenhum tem consequência sem trabalho interpretativo.'
    },
    zh: {
      title: '数据与计算之间的意义',
      dek: '原始记录与生成模型方向相反；没有阐释性工作，两者都不会产生后果。'
    },
    ja: {
      title: 'データと計算のあいだの意味',
      dek: '生の記録と生成モデルは反対方向を向き、解釈の労働なしには結果を生みません。'
    },
    ko: {
      title: '데이터와 계산 사이의 의미',
      dek: '원시 기록과 생성 모델은 반대 방향을 향합니다. 해석 작업 없이는 결과를 만들지 못합니다.'
    },
    ms: {
      title: 'Makna antara data dan pengiraan',
      dek: 'Rekod mentah dan model generatif menghadap arah bertentangan; kedua-duanya tidak bermakna tanpa kerja tafsiran.'
    },
    it: {
      title: 'Il senso tra dati e calcolo',
      dek: 'Registri grezzi e modelli generativi vanno in direzioni opposte; nessuno ha conseguenze senza lavoro interpretativo.'
    },
    ar: {
      title: 'المعنى بين البيانات والحساب',
      dek: 'السجلات الخام والنماذج التوليدية تتجهان باتجاهين متعاكسين؛ بلا عمل تفسيري لا تتحقق نتيجة.'
    },
    hi: {
      title: 'डेटा और गणना के बीच अर्थ',
      dek: 'कच्चे अभिलेख और जनरेटिव मॉडल विपरीत दिशाओं में हैं; व्याख्यात्मक श्रम के बिना परिणाम नहीं बनते।'
    },
    id: {
      title: 'Makna antara data dan komputasi',
      dek: 'Catatan mentah dan model generatif menghadap arah berlawanan; tanpa kerja interpretatif keduanya tidak berkonsekuensi.'
    },
    nl: {
      title: 'Betekenis tussen data en berekening',
      dek: 'Ruwe records en generatieve modellen wijzen tegengestelde kanten op; zonder interpretatief werk blijft beide zonder gevolg.'
    },
    ru: {
      title: 'Смысл между данными и вычислениями',
      dek: 'Сырые записи и генеративные модели смотрят в разные стороны; без интерпретационной работы нет последствий.'
    },
    tr: {
      title: 'Veri ile hesaplama arasında anlam',
      dek: 'Ham kayıtlar ve üretken modeller zıt yönlere bakar; yorumlayıcı emek olmadan sonuç doğmaz.'
    },
    th: {
      title: 'ความหมายระหว่างข้อมูลกับการคำนวณ',
      dek: 'บันทึกดิบกับแบบจำลองเชิงสร้างสรรค์หันคนละทาง โดยไม่มีงานตีความแล้วไม่มีผลลัพธ์'
    },
    vi: {
      title: 'Ý nghĩa giữa dữ liệu và tính toán',
      dek: 'Bản ghi thô và mô hình sinh tạo hướng ngược chiều; không có lao động diễn giải thì không có hậu quả.'
    }
  },
  {
    slug: 'four-things-land-art-technology-data',
    en: {
      title: 'Four things: land, art, technology, data',
      dek: 'A short note on the Foundation’s cultural frame — why land, art, technology, and data hold together.'
    },
    es: {
      title: 'Cuatro cosas: tierra, arte, tecnología, datos',
      dek: 'Una nota breve sobre el marco cultural de la Foundation: por qué tierra, arte, tecnología y datos se sostienen juntos.'
    },
    fr: {
      title: 'Quatre choses : terre, art, technologie, données',
      dek: 'Une courte note sur le cadre culturel de la Foundation — pourquoi terre, art, technologie et données tiennent ensemble.'
    },
    de: {
      title: 'Vier Dinge: Land, Kunst, Technologie, Daten',
      dek: 'Eine kurze Notiz zum kulturellen Rahmen der Foundation — warum Land, Kunst, Technologie und Daten zusammengehören.'
    },
    pt: {
      title: 'Quatro coisas: terra, arte, tecnologia, dados',
      dek: 'Uma nota curta sobre o enquadramento cultural da Foundation — por que terra, arte, tecnologia e dados se sustentam juntos.'
    },
    zh: {
      title: '四件事：土地、艺术、技术、数据',
      dek: '关于 Foundation 文化框架的短文——为何土地、艺术、技术与数据彼此支撑。'
    },
    ja: {
      title: '四つのもの：土地、芸術、技術、データ',
      dek: 'Foundation の文化的枠組みについての短いノート — 土地・芸術・技術・データがなぜ結びつくか。'
    },
    ko: {
      title: '네 가지: 땅, 예술, 기술, 데이터',
      dek: 'Foundation의 문화적 틀에 대한 짧은 노트 — 땅, 예술, 기술, 데이터가 왜 함께 성립하는가.'
    },
    ms: {
      title: 'Empat perkara: tanah, seni, teknologi, data',
      dek: 'Nota ringkas tentang rangka budaya Foundation — mengapa tanah, seni, teknologi dan data saling menyokong.'
    },
    it: {
      title: 'Quattro cose: terra, arte, tecnologia, dati',
      dek: 'Una breve nota sul quadro culturale della Foundation — perché terra, arte, tecnologia e dati reggono insieme.'
    },
    ar: {
      title: 'أربعة أشياء: الأرض والفن والتقنية والبيانات',
      dek: 'ملاحظة قصيرة عن الإطار الثقافي لـ Foundation — لماذا تتماسك الأرض والفن والتقنية والبيانات.'
    },
    hi: {
      title: 'चार चीज़ें: भूमि, कला, तकनीक, डेटा',
      dek: 'Foundation के सांस्कृतिक ढाँचे पर संक्षिप्त टिप्पणी — भूमि, कला, तकनीक और डेटा क्यों साथ रहते हैं।'
    },
    id: {
      title: 'Empat hal: lahan, seni, teknologi, data',
      dek: 'Catatan singkat tentang kerangka budaya Foundation — mengapa lahan, seni, teknologi, dan data saling menopang.'
    },
    nl: {
      title: 'Vier dingen: land, kunst, technologie, data',
      dek: 'Een korte noot over het culturele kader van de Foundation — waarom land, kunst, technologie en data samenhangen.'
    },
    ru: {
      title: 'Четыре вещи: земля, искусство, технологии, данные',
      dek: 'Краткая заметка о культурной рамке Foundation — почему земля, искусство, технологии и данные держатся вместе.'
    },
    tr: {
      title: 'Dört şey: arazi, sanat, teknoloji, veri',
      dek: 'Foundation’ın kültürel çerçevesine kısa bir not — arazi, sanat, teknoloji ve verinin neden birlikte durduğu.'
    },
    th: {
      title: 'สี่สิ่ง: ที่ดิน ศิลปะ เทคโนโลยี ข้อมูล',
      dek: 'บันทึกสั้นเกี่ยวกับกรอบวัฒนธรรมของ Foundation — ทำไมที่ดิน ศิลปะ เทคโนโลยี และข้อมูลจึงเกาะกัน'
    },
    vi: {
      title: 'Bốn điều: đất, nghệ thuật, công nghệ, dữ liệu',
      dek: 'Ghi chú ngắn về khung văn hóa của Foundation — vì sao đất, nghệ thuật, công nghệ và dữ liệu gắn với nhau.'
    }
  },
  {
    slug: 'institutions-standards-and-the-infrastructure-gap',
    en: {
      title: 'Institutions, standards, and the infrastructure gap',
      dek: 'Peak bodies are typically structured for governance and endorsement rather than sustained product engineering.'
    },
    es: {
      title: 'Instituciones, estándares y la brecha de infraestructura',
      dek: 'Los organismos de cumbre suelen estructurarse para gobernanza y respaldo, no para ingeniería de producto sostenida.'
    },
    fr: {
      title: 'Institutions, standards et écart d’infrastructure',
      dek: 'Les organismes faîtiers sont souvent structurés pour la gouvernance et l’endorsement, non pour l’ingénierie produit durable.'
    },
    de: {
      title: 'Institutionen, Standards und die Infrastrukturlücke',
      dek: 'Spitzenverbände sind typischerweise für Governance und Endorsement strukturiert, nicht für nachhaltige Produktentwicklung.'
    },
    pt: {
      title: 'Instituições, padrões e o fosso de infraestrutura',
      dek: 'Órgãos de cúpula costumam estruturar-se para governança e endosso, não para engenharia de produto sustentada.'
    },
    zh: {
      title: '机构、标准与基础设施缺口',
      dek: '顶层机构通常面向治理与背书，而非持续的产品工程。'
    },
    ja: {
      title: '制度、標準、インフラのギャップ',
      dek: '頂点団体は持続的なプロダクト工学より、ガバナンスと承認のために組み立てられがちです。'
    },
    ko: {
      title: '기관, 표준, 그리고 인프라 격차',
      dek: '정점 기구는 대개 지속적인 제품 엔지니어링보다 거버넌스와 승인에 맞춰 구조화됩니다.'
    },
    ms: {
      title: 'Institusi, standard, dan jurang infrastruktur',
      dek: 'Badan puncak biasanya distrukturkan untuk tadbir urus dan pengendorsan, bukan kejuruteraan produk berterusan.'
    },
    it: {
      title: 'Istituzioni, standard e il divario infrastrutturale',
      dek: 'Gli organismi apicali sono di solito strutturati per governance e endorsement, non per ingegneria di prodotto sostenuta.'
    },
    ar: {
      title: 'المؤسسات والمعايير وفجوة البنية التحتية',
      dek: 'الهيئات العليا تُبنى عادة للحوكمة والتأييد لا لهندسة المنتجات المستدامة.'
    },
    hi: {
      title: 'संस्थान, मानक और अवसंरचना अंतर',
      dek: 'शीर्ष निकाय आमतौर पर निरंतर उत्पाद इंजीनियरिंग के बजाय शासन और समर्थन के लिए संरचित होते हैं।'
    },
    id: {
      title: 'Institusi, standar, dan kesenjangan infrastruktur',
      dek: 'Badan puncak biasanya disusun untuk tata kelola dan dukungan, bukan rekayasa produk berkelanjutan.'
    },
    nl: {
      title: 'Instellingen, standaarden en de infrastructuurkloof',
      dek: 'Koepelorganen zijn meestal ingericht op bestuur en endorsement, niet op duurzame productengineering.'
    },
    ru: {
      title: 'Институты, стандарты и инфраструктурный разрыв',
      dek: 'Вершинные органы обычно устроены для управления и одобрения, а не для устойчивой продуктовой инженерии.'
    },
    tr: {
      title: 'Kurumlar, standartlar ve altyapı boşluğu',
      dek: 'Çatı organlar genelde sürdürülebilir ürün mühendisliğinden çok yönetişim ve onay için yapılandırılır.'
    },
    th: {
      title: 'สถาบัน มาตรฐาน และช่องว่างโครงสร้างพื้นฐาน',
      dek: 'องค์กรระดับสูงมักถูกจัดสำหรับธรรมาภิบาลและการรับรอง ไม่ใช่วิศวกรรมผลิตภัณฑ์ต่อเนื่อง'
    },
    vi: {
      title: 'Thể chế, tiêu chuẩn và khoảng trống hạ tầng',
      dek: 'Các cơ quan đỉnh thường được cấu trúc cho quản trị và xác nhận, không phải kỹ thuật sản phẩm bền vững.'
    }
  },
  {
    slug: 'a-shared-vocabulary',
    en: {
      title: 'A shared vocabulary for the profession',
      dek: 'An open data dictionary is the quiet infrastructure that lets studios, universities, and agencies speak — and disagree — precisely.'
    },
    es: {
      title: 'Un vocabulario compartido para la profesión',
      dek: 'Un diccionario de datos abierto es la infraestructura silenciosa que permite a estudios, universidades y agencias hablar — y discrepar — con precisión.'
    },
    fr: {
      title: 'Un vocabulaire partagé pour la profession',
      dek: 'Un dictionnaire de données ouvert est l’infrastructure discrète qui laisse studios, universités et agences parler — et diverger — avec précision.'
    },
    de: {
      title: 'Ein gemeinsames Vokabular für den Beruf',
      dek: 'Ein offenes Datenwörterbuch ist die stille Infrastruktur, mit der Studios, Universitäten und Behörden präzise sprechen — und streiten — können.'
    },
    pt: {
      title: 'Um vocabulário partilhado para a profissão',
      dek: 'Um dicionário de dados aberto é a infraestrutura silenciosa que permite a estúdios, universidades e agências falar — e discordar — com precisão.'
    },
    zh: {
      title: '行业共享词汇',
      dek: '开放数据词典是安静的基础设施，让事务所、大学与机构能精确地对话——也能精确地分歧。'
    },
    ja: {
      title: '職能のための共有語彙',
      dek: 'オープンなデータ辞書は、スタジオ・大学・機関が精確に話し、精確に異論を述べるための静かな基盤です。'
    },
    ko: {
      title: '전문직을 위한 공유 어휘',
      dek: '개방형 데이터 사전은 스튜디오·대학·기관이 정확히 말하고 정확히 이견을 낼 수 있게 하는 조용한 인프라입니다.'
    },
    ms: {
      title: 'Kosa kata dikongsi untuk profesion',
      dek: 'Kamus data terbuka ialah infrastruktur senyap yang membolehkan studio, universiti dan agensi bercakap — dan berselisih — dengan tepat.'
    },
    it: {
      title: 'Un vocabolario condiviso per la professione',
      dek: 'Un dizionario dati aperto è l’infrastruttura silenziosa che consente a studi, università e agenzie di parlare — e dissentire — con precisione.'
    },
    ar: {
      title: 'مفردات مشتركة للمهنة',
      dek: 'قاموس بيانات مفتوح هو البنية التحتية الهادئة التي تتيح للاستوديوهات والجامعات والوكالات أن تتكلم — وأن تختلف — بدقة.'
    },
    hi: {
      title: 'पेशे के लिए साझा शब्दावली',
      dek: 'खुला डेटा शब्दकोश वह शांत अवसंरचना है जिससे स्टूडियो, विश्वविद्यालय और एजेंसियाँ सटीक बोल — और असहमत — सकें।'
    },
    id: {
      title: 'Kosakata bersama untuk profesi',
      dek: 'Kamus data terbuka adalah infrastruktur senyap yang memungkinkan studio, universitas, dan lembaga berbicara — dan berselisih — dengan tepat.'
    },
    nl: {
      title: 'Een gedeeld vocabulaire voor het vak',
      dek: 'Een open datawoordenboek is de stille infrastructuur waarmee studio’s, universiteiten en agencies precies spreken — en oneens zijn.'
    },
    ru: {
      title: 'Общий словарь для профессии',
      dek: 'Открытый словарь данных — тихая инфраструктура, позволяющая студиям, университетам и агентствам говорить — и спорить — точно.'
    },
    tr: {
      title: 'Meslek için ortak bir sözvarlığı',
      dek: 'Açık veri sözlüğü, stüdyoların, üniversitelerin ve kurumların kesin konuşmasını — ve ayrışmasını — sağlayan sessiz altyapıdır.'
    },
    th: {
      title: 'คำศัพท์ร่วมสำหรับวิชาชีพ',
      dek: 'พจนานุกรมข้อมูลแบบเปิดคือโครงสร้างพื้นฐานเงียบ ๆ ที่ให้สตูดิโอ มหาวิทยาลัย และหน่วยงานพูด — และไม่เห็นด้วย — อย่างแม่นยำ'
    },
    vi: {
      title: 'Từ vựng chung cho nghề',
      dek: 'Từ điển dữ liệu mở là hạ tầng thầm lặng giúp studio, trường đại học và cơ quan nói — và bất đồng — một cách chính xác.'
    }
  },
  {
    slug: 'guidelines-for-honest-records',
    en: {
      title: 'Guidelines for honest project records',
      dek: 'Practical guidance on evidencing claims, cultural sensitivity, and attributing synthetic assets in exchange bundles.'
    },
    es: {
      title: 'Pautas para registros de proyecto honestos',
      dek: 'Orientación práctica sobre evidenciar afirmaciones, sensibilidad cultural y atribuir activos sintéticos en paquetes de intercambio.'
    },
    fr: {
      title: 'Lignes directrices pour des dossiers de projet honnêtes',
      dek: 'Conseils pratiques pour étayer les affirmations, la sensibilité culturelle et l’attribution d’actifs synthétiques dans les lots d’échange.'
    },
    de: {
      title: 'Leitlinien für ehrliche Projektdatensätze',
      dek: 'Praktische Hinweise zur Belegung von Aussagen, kultureller Sensibilität und Attribution synthetischer Assets in Austauschpaketen.'
    },
    pt: {
      title: 'Orientações para registos de projeto honestos',
      dek: 'Orientação prática sobre evidenciar afirmações, sensibilidade cultural e atribuir ativos sintéticos em pacotes de troca.'
    },
    zh: {
      title: '诚实项目记录指南',
      dek: '关于在交换包中举证主张、文化敏感性与合成资产归属的实用指引。'
    },
    ja: {
      title: '誠実なプロジェクト記録の指針',
      dek: '交換バンドルにおける主張の証跡、文化的配慮、合成アセットの帰属に関する実務ガイド。'
    },
    ko: {
      title: '정직한 프로젝트 기록을 위한 지침',
      dek: '교환 번들에서 주장 입증, 문화적 민감성, 합성 자산 귀속에 대한 실무 안내.'
    },
    ms: {
      title: 'Garis panduan untuk rekod projek yang jujur',
      dek: 'Panduan praktikal tentang membuktikan tuntutan, kepekaan budaya, dan mengatribusikan aset sintetik dalam bungkusan pertukaran.'
    },
    it: {
      title: 'Linee guida per registri di progetto onesti',
      dek: 'Orientamenti pratici su prove delle affermazioni, sensibilità culturale e attribuzione di asset sintetici nei pacchetti di scambio.'
    },
    ar: {
      title: 'إرشادات لسجلات مشاريع صادقة',
      dek: 'توجيه عملي لإثبات الادعاءات والحساسية الثقافية ونسب الأصول الاصطناعية في حزم التبادل.'
    },
    hi: {
      title: 'ईमानदार परियोजना अभिलेखों के दिशानिर्देश',
      dek: 'दावों के साक्ष्य, सांस्कृतिक संवेदनशीलता और विनिमय बंडलों में सिंथेटिक संपत्तियों के आरोपण पर व्यावहारिक मार्गदर्शन।'
    },
    id: {
      title: 'Pedoman untuk catatan proyek yang jujur',
      dek: 'Panduan praktis tentang membuktikan klaim, sensitivitas budaya, dan mengatribusikan aset sintetis dalam paket pertukaran.'
    },
    nl: {
      title: 'Richtlijnen voor eerlijke projectdossiers',
      dek: 'Praktische handvatten voor het onderbouwen van claims, culturele gevoeligheid en attributie van synthetische assets in uitwisselingspakketten.'
    },
    ru: {
      title: 'Руководящие принципы честных проектных записей',
      dek: 'Практические указания по доказательству утверждений, культурной чувствительности и атрибуции синтетических активов в обменных пакетах.'
    },
    tr: {
      title: 'Dürüst proje kayıtları için kılavuz',
      dek: 'İddiaları kanıtlama, kültürel duyarlılık ve değişim paketlerinde sentetik varlık atfına dair pratik rehber.'
    },
    th: {
      title: 'แนวทางสำหรับบันทึกโครงการที่ซื่อสัตย์',
      dek: 'คำแนะนำเชิงปฏิบัติเกี่ยวกับการพิสูจน์ข้อกล่าวอ้าง ความอ่อนไหวทางวัฒนธรรม และการระบุที่มาของสินทรัพย์สังเคราะห์ในชุดแลกเปลี่ยน'
    },
    vi: {
      title: 'Hướng dẫn hồ sơ dự án trung thực',
      dek: 'Hướng dẫn thực tiễn về chứng minh tuyên bố, độ nhạy văn hóa và gán tài sản tổng hợp trong gói trao đổi.'
    }
  },
  {
    slug: 'who-owns-the-words',
    en: {
      title: 'Who owns the words? The economics of data and the future of landscape architecture',
      dek: 'When the field dictionary lives inside products, the profession rents its own language.'
    },
    es: {
      title: '¿Quién es dueño de las palabras? La economía de los datos y el futuro de la arquitectura del paisaje',
      dek: 'Cuando el diccionario de campos vive dentro de productos, la profesión alquila su propio lenguaje.'
    },
    fr: {
      title: 'À qui appartiennent les mots ? L’économie des données et l’avenir de l’architecture du paysage',
      dek: 'Quand le dictionnaire de champs vit dans des produits, la profession loue sa propre langue.'
    },
    de: {
      title: 'Wem gehören die Worte? Die Ökonomie der Daten und die Zukunft der Landschaftsarchitektur',
      dek: 'Wenn das Feldwörterbuch in Produkten lebt, mietet der Beruf seine eigene Sprache.'
    },
    pt: {
      title: 'Quem é dono das palavras? A economia dos dados e o futuro da arquitetura paisagista',
      dek: 'Quando o dicionário de campos vive dentro de produtos, a profissão aluga a própria linguagem.'
    },
    zh: {
      title: '谁拥有这些词？数据经济与景观建筑的未来',
      dek: '当字段词典活在产品内部时，行业在租用自己的语言。'
    },
    ja: {
      title: '言葉は誰のものか？データの経済と景観建築の未来',
      dek: 'フィールド辞書が製品の中にあるとき、職能は自らの言語を借りることになる。'
    },
    ko: {
      title: '말은 누구의 것인가? 데이터 경제와 조경의 미래',
      dek: '필드 사전이 제품 안에 살면, 전문직은 자신의 언어를 임대하게 됩니다.'
    },
    ms: {
      title: 'Siapa memiliki kata-kata? Ekonomi data dan masa depan seni bina landskap',
      dek: 'Apabila kamus medan hidup dalam produk, profesion menyewa bahasanya sendiri.'
    },
    it: {
      title: 'Di chi sono le parole? L’economia dei dati e il futuro dell’architettura del paesaggio',
      dek: 'Quando il dizionario dei campi vive nei prodotti, la professione affitta il proprio linguaggio.'
    },
    ar: {
      title: 'من يملك الكلمات؟ اقتصاد البيانات ومستقبل عمارة المشهد',
      dek: 'عندما يعيش قاموس الحقول داخل المنتجات، تستأجر المهنة لغتها الخاصة.'
    },
    hi: {
      title: 'शब्दों का मालिक कौन? डेटा की अर्थव्यवस्था और लैंडस्केप आर्किटेक्चर का भविष्य',
      dek: 'जब फ़ील्ड शब्दकोश उत्पादों के अंदर रहता है, तो पेशा अपनी भाषा किराए पर लेता है।'
    },
    id: {
      title: 'Siapa memiliki kata-kata? Ekonomi data dan masa depan arsitektur lanskap',
      dek: 'Ketika kamus bidang hidup di dalam produk, profesi menyewa bahasanya sendiri.'
    },
    nl: {
      title: 'Van wie zijn de woorden? De economie van data en de toekomst van landschapsarchitectuur',
      dek: 'Wanneer het veldwoordenboek in producten leeft, huurt het vak zijn eigen taal.'
    },
    ru: {
      title: 'Кому принадлежат слова? Экономика данных и будущее ландшафтной архитектуры',
      dek: 'Когда словарь полей живёт внутри продуктов, профессия арендует свой собственный язык.'
    },
    tr: {
      title: 'Sözcükler kimin? Veri ekonomisi ve peyzaj mimarlığının geleceği',
      dek: 'Alan sözlüğü ürünlerin içinde yaşadığında, meslek kendi dilini kiralar.'
    },
    th: {
      title: 'ใครเป็นเจ้าของคำ? เศรษฐศาสตร์ข้อมูลและอนาคตของสถาปัตยกรรมภูมิทัศน์',
      dek: 'เมื่อพจนานุกรมฟิลด์อยู่ในผลิตภัณฑ์ วิชาชีพก็เช่าภาษาของตนเอง'
    },
    vi: {
      title: 'Ai sở hữu các từ? Kinh tế dữ liệu và tương lai của kiến trúc cảnh quan',
      dek: 'Khi từ điển trường sống trong sản phẩm, nghề thuê chính ngôn ngữ của mình.'
    }
  },
  {
    slug: 'reading-the-landscape-as-data',
    en: {
      title: 'Reading the landscape as data',
      dek: 'Synonyms, definitions, and meaning as design material — for studios and researchers working across borders.'
    },
    es: {
      title: 'Leer el paisaje como datos',
      dek: 'Sinónimos, definiciones y sentido como material de diseño — para estudios e investigadores que trabajan a través de fronteras.'
    },
    fr: {
      title: 'Lire le paysage comme données',
      dek: 'Synonymes, définitions et sens comme matériau de conception — pour studios et chercheurs travaillant par-delà les frontières.'
    },
    de: {
      title: 'Die Landschaft als Daten lesen',
      dek: 'Synonyme, Definitionen und Bedeutung als Entwurfmaterial — für Studios und Forschende über Grenzen hinweg.'
    },
    pt: {
      title: 'Ler a paisagem como dados',
      dek: 'Sinónimos, definições e sentido como material de projeto — para estúdios e investigadores que trabalham através de fronteiras.'
    },
    zh: {
      title: '把景观当作数据来阅读',
      dek: '同义词、定义与意义作为设计材料——面向跨境工作的事务所与研究者。'
    },
    ja: {
      title: '景観をデータとして読む',
      dek: '同義語・定義・意味を設計材料として — 国境を越えて働くスタジオと研究者のために。'
    },
    ko: {
      title: '경관을 데이터로 읽기',
      dek: '동의어, 정의, 의미를 설계 재료로 — 국경을 넘어 일하는 스튜디오와 연구자를 위해.'
    },
    ms: {
      title: 'Membaca landskap sebagai data',
      dek: 'Sinonim, definisi dan makna sebagai bahan reka bentuk — untuk studio dan penyelidik yang bekerja merentas sempadan.'
    },
    it: {
      title: 'Leggere il paesaggio come dati',
      dek: 'Sinonimi, definizioni e senso come materiale di progetto — per studi e ricercatori che lavorano oltre i confini.'
    },
    ar: {
      title: 'قراءة المشهد بوصفها بيانات',
      dek: 'المرادفات والتعريفات والمعنى كمادة تصميم — للاستوديوهات والباحثين العاملين عبر الحدود.'
    },
    hi: {
      title: 'लैंडस्केप को डेटा के रूप में पढ़ना',
      dek: 'समानार्थी शब्द, परिभाषाएँ और अर्थ डिज़ाइन सामग्री के रूप में — सीमाओं पार काम करने वाले स्टूडियो और शोधकर्ताओं के लिए।'
    },
    id: {
      title: 'Membaca lanskap sebagai data',
      dek: 'Sinonim, definisi, dan makna sebagai bahan desain — untuk studio dan peneliti yang bekerja lintas batas.'
    },
    nl: {
      title: 'Het landschap als data lezen',
      dek: 'Synoniemen, definities en betekenis als ontwerpmateriaal — voor studio’s en onderzoekers over grenzen heen.'
    },
    ru: {
      title: 'Читать ландшафт как данные',
      dek: 'Синонимы, определения и смысл как материал проектирования — для студий и исследователей, работающих через границы.'
    },
    tr: {
      title: 'Peyzajı veri olarak okumak',
      dek: 'Eşanlamlılar, tanımlar ve anlam tasarım malzemesi olarak — sınırlar ötesi çalışan stüdyolar ve araştırmacılar için.'
    },
    th: {
      title: 'อ่านภูมิทัศน์ในฐานะข้อมูล',
      dek: 'คำพ้อง ความหมาย และนิยามในฐานะวัสดุออกแบบ — สำหรับสตูดิโอและนักวิจัยที่ทำงานข้ามพรมแดน'
    },
    vi: {
      title: 'Đọc cảnh quan như dữ liệu',
      dek: 'Từ đồng nghĩa, định nghĩa và ý nghĩa như vật liệu thiết kế — cho studio và nhà nghiên cứu làm việc xuyên biên giới.'
    }
  }
]

/** @type {Record<string, Record<string, string>>} */
export const FIELD_NOTES_CHROME_MESSAGES = (() => {
  /** @type {Record<string, Record<string, string>>} */
  const out = {}
  for (const note of NOTES) {
    for (const [locale, strings] of Object.entries(note)) {
      if (locale === 'slug') continue
      if (!out[locale]) out[locale] = {}
      out[locale][`fn.${note.slug}.title`] = strings.title
      out[locale][`fn.${note.slug}.dek`] = strings.dek
    }
  }
  return out
})()

/**
 * @param {Record<string, Record<string, string>>} base
 */
export function mergeFieldNotesChromeMessages(base) {
  const out = { ...base }
  for (const [locale, keys] of Object.entries(FIELD_NOTES_CHROME_MESSAGES)) {
    out[locale] = { ...(out[locale] || {}), ...keys }
  }
  return out
}
