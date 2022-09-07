var map = new BMapGL.Map('container'); //创造地图
map.centerAndZoom(new BMapGL.Point(121.46223, 31.233143), 15); //设置地图中心点
map.enableScrollWheelZoom(true); //启用鼠标滚轴缩放

var mapPoints = [
    {x: "31.221975", y: "121.485214"},
    {x: "31.209673", y: "121.45561"},
    {x: "31.240154", y: "121.49108"},
    {x: "31.243223", y: "121.48124"},
    {x: "31.265173", y: "121.52094"},
    {x: "31.235815", y: "121.45961"},
    {x: "31.262098", y: "121.568275"},
    {x: "31.260662", y: "121.52643"},
    {x: "31.242867", y: "121.49023"},
    {x: "31.218384", y: "121.47215"},
    {x: "31.276596", y: "121.47396"},
    {x: "31.237335", y: "121.4714"},
    {x: "31.227758", y: "121.4698"},
    {x: "31.209518", y: "121.44154"},
    {x: "31.229353", y: "121.45463"},
    {x: "31.24119", y: "121.44491"},
    {x: "31.24381", y: "121.46854"},
    {x: "31.217497", y: "121.447754"},
    {x: "31.217909", y: "121.497574"},
    {x: "31.22561", y: "121.49227"},
    {x: "31.241121", y: "121.46362"},
    {x: "31.276144", y: "121.561325"},
    {x: "31.030909", y: "121.78683"},
    {x: "31.267513", y: "121.49024"},
    {x: "30.98755", y: "121.30669"},
    {x: "31.262941", y: "121.489624"},
    {x: "31.244211", y: "121.49412"},
    {x: "31.266336", y: "121.53526"},
    {x: "31.22904", y: "121.47956"},
    {x: "31.2192", y: "121.47272"},
    {x: "31.190865", y: "121.44972"},
    {x: "31.214233", y: "121.4646"},
    {x: "31.227873", y: "121.48032"},
    {x: "31.178427", y: "121.4424"},
    {x: "31.250519", y: "121.49058"},
    {x: "31.277231", y: "121.50605"},
    {x: "31.236797", y: "121.493904"},
    {x: "31.261776", y: "121.53186"},
    {x: "31.246319", y: "121.47801"},
    {x: "31.26847", y: "121.5425"},
    {x: "31.226992", y: "121.43769"},
    {x: "31.16367", y: "121.367714"},
    {x: "31.226265", y: "121.45009"},
    {x: "31.263683", y: "121.488335"},
    {x: "31.22992", y: "121.478004"},
    {x: "31.002434", y: "121.4394"},
    {x: "31.255903", y: "121.48282"},
    {x: "31.26367", y: "121.48411"},
    {x: "31.231483", y: "121.4513"},
    {x: "31.218533", y: "121.47788"},
    {x: "31.2434", y: "121.4815"},
    {x: "31.222422", y: "121.46739"},
    {x: "31.218534", y: "121.489494"},
    {x: "31.240046", y: "121.44909"},
    {x: "31.179523", y: "121.50246"},
    {x: "31.229006", y: "121.46968"},
    {x: "31.236622", y: "121.46123"},
    {x: "31.231058", y: "121.47298"},
    {x: "31.243053", y: "121.49028"},
    {x: "31.030909", y: "121.78683"},
    {x: "31.357163", y: "121.58766"},
    {x: "31.24336", y: "121.48796"},
    {x: "31.24591", y: "121.457275"},
    {x: "31.256798", y: "121.497505"},
    {x: "31.272005", y: "121.491554"},
    {x: "31.2248", y: "121.48376"},
    {x: "31.240046", y: "121.44909"},
    {x: "31.234499", y: "121.46308"},
    {x: "31.261475", y: "121.48163"},
    {x: "31.270657", y: "121.49152"},
    {x: "31.27138", y: "121.52917"},
    {x: "31.240503", y: "121.46721"},
    {x: "31.097286", y: "121.37571"},
    {x: "31.223438", y: "121.49143"},
    {x: "31.232126", y: "121.48605"},
    {x: "31.268446", y: "121.487274"},
    {x: "31.245274", y: "121.49428"},
    {x: "31.233143", y: "121.46223"},
    {x: "31.224117", y: "121.4732"},
    {x: "31.238802", y: "121.441956"},
    {x: "31.265867", y: "121.5147"},
    {x: "31.22546", y: "121.476746"},
    {x: "31.179523", y: "121.50246"},
    {x: "31.112064", y: "121.06141"}
];
var info_buildingName = ['任耐、王乃坚旧居', '夏衍旧居', '《真话报》社遗址', '全国总工会印刷所遗址', '中共杨树浦部委机关遗址', '中共中央秘密印刷厂', '读书生活出版社', '圣工小学旧址', '时代出版社', '“红色教授”钱亦石工作地', '楚图南旧居', '瞿秋白旧居', '中国国民党临时行动委员会印刷机关', '卜万苍旧居', '郁达夫旧居', '孤军营遗址', '文明印务局遗址', '潘汉年旧居', '上海留法勤工俭学预备科旧址', '《向导》周刊编辑部遗址', '中共中央秘密印刷厂', '王孝和旧居', '惠知小学遗址', '鲁迅1930年避难处', '“新时代丛书”社暨李汉俊旧居', '上海工人第三次武装起义罗亦农办公室', '上海中国职业妇女俱乐部旧址', '中共沪东重工业委员会联络点遗址', '董健吾旧居', '徐懋庸旧居', '徐鸿、柳湜旧居', '萧军旧居', '赴法学生上海会集所遗址', '曹家花园旧址', '中兴印刷厂旧址', '中共大连坊秘密排字厂遗址', '《联合日报》社', '中共中央沪东印刷厂遗址', '四行仓库抗日纪念地', '工余义务夜校', '蔡元培旧居', '七号桥碉堡旧址', '上海人民广播电台旧址', '陶晶孙旧居', '李白贝勒路电台遗址', '中共沪东机器业联络点遗址', '北火车站“六二三”集会地遗址', '巴金旧居', '华东模范中学', '第一国际难民收容所旧址', '上海印刷工会', '许广平旧居', '上海公共体育场旧址', '1948年民革上海临时分会暨叶尚文旧居', '江浙留法同学会', '1940年新四军上海办事处遗址', '中共中央秘密联络点暨罗亦农被捕处遗址', '中联广播电台遗址', '“爱用国货，抵制美货”委员会成立大会旧址', '沪东工人纠察队秘密军训处遗址', '黄慕兰旧居', '神州职业夜中学', '中国国民党临时行动委员会组织委员会机关', '杨匏安旧居及其被捕处', '理查德·左尔格旧居', '李书城、李汉俊旧居暨《星期评论》编辑部遗址', '佛教净业妇孺难民收容所遗址', '《新华日报》驻沪办事处', '国华印刷所遗址', '沙汀旧居', '浦阳小学旧址', '上海工部局华员总会难民收容所遗址', '闵行区烈士陵园', '西门书店遗址', '黄金大戏院暨1939年中共地下党领导的上海市职业界联合义卖公演处遗址', '冯雪峰旧居', '中共地下党秘密联络点——鼎元钱庄', '荣家老宅', '孙中山旧居', '棚户民校遗址', '中共明华坊印刷厂遗址', '中国农工民主党驻沪秘密办事处旧址', '瞿白音旧居', '陆凤翔旧居'];
var info_address = ['顺昌路', '乌鲁木齐南路178号2号楼', '九江路山东中路路口', '浙江中路天潼路之间的北京东路北侧', '长阳路荆州路路口一带', '北京西路', '吴江路', '福禄街195号', '南京东路', '瑞金二路', '西宝兴路', '南京西路646弄一带', '瑞金一路', '淮海中路2006弄', '常德路81弄', '余姚路321弄一带', '新闸路大田路西北角', '武康路99号', '陆家浜路918号', '复兴东路1047弄3号', '泰兴路', '杨树浦路2800号内', '惠民路荆州路一带', '四川北路1881弄', '兴业路76、78号', '四川北路', '南京东路114-142号', '盐山路近齐齐哈尔路北侧', '淮海中路358弄21号', '瑞金二路129弄106号', '辛耕路天钥桥路', '襄阳南路351号', '兴安路', '漕溪路203号漕溪公园内', '天潼路478弄12号', '唐山路大连路路口', '延安东路', '扬州路346弄爱民坊', '光复路1号', '平凉路新华里1298弄23号', '愚园路884号', '漕宝路2005号', '延安西路129号', '北四川路', '黄陂南路148号', '平凉路大连路路口', '天目东路（上海铁路博物馆）', '宝山路', '胶州路15号', '重庆南路227号', '芝罘路', '淮海中路927弄64号', '方斜路515号', '常德路', '淮海中路', '巨鹿路瑞金一路路口', '北京西路1060弄', '大沽路延安公园北端', '南京东路328号', '惠民路419弄', '华山路', '天津路', '淮安路', '东余杭路', '山阴路145弄2号', '自忠路三益里17号', '常德路', '南京西路', '宝昌路临山路路口', '山阴路57号', '江浦路969弄', '石门二路', '临春路388号', '中华路盐城路路口', '金陵中路1号', '横浜路35弄11号', '四川中路滇池路路口', '陕西北路186号', '南昌路59号', '余姚路487弄19号', '霍山路保定路路口东南侧', '南昌路56号', '淮海中路', '朱家角镇胜利街239弄胜利新村内'];
var info_description = ['任耐、王乃坚旧居位于菜市路（今）313弄。1946年至1949年，中共情报系统在上海有四部秘密电台和两部收报台。1947年10月，在沪的四部秘密电台之一——岭台的报务员改为任耐、王乃坚。为了隐藏电台，王乃坚和任耐以夫妻名义工作。起初，他们住在迪化南路。1948年10月，搬到菜市路（今顺昌路）313弄。他们把电台藏在亭子间门口的楼梯空当处，白天工作，晚上收报。这段时间，由联络员莫止与他们联系。莫止将收来的电报带回家，交给李冠华译报。该台一直工作到上海解放。', '夏衍旧居位于乌鲁木齐南路178号2号楼。\n\n    夏衍，本名沈月熙，字端轩，浙江省杭州市人，中国著名作家、文艺评论家、翻译家。夏衍艰难坎坷又丰富多彩的传奇经历与上海有着紧密的联系。1927年，夏衍在上海加入中国共产党，是中国新文化运动的先驱者之一。1929年，夏衍同鲁迅筹建中国左翼作家联盟，“左联”成立后任执行委员，后发起组织中国左翼戏剧家联盟。1949年5月上海解放后，夏衍先后任上海军事管制委员会文教委员会副主任、中共华东局宣传部副部长、上海市委常委、宣传部部长等职。\n\n    从1949年到1956年，他就住在乌鲁木齐南路178号这幢花园住宅里，这是夏衍在沪居住时间最长的寓所。该宅建于1932年，占地面积750平方米，为假三层砖木结构英国风格花园住宅。后为徐汇区政协办公用房。\n\n    2009年，公布为徐汇区登记不可移动文物。2011年，公布为徐汇区文物保护单位。2014年，公布为上海市文物保护单位。2019年3月24日，正式对外开放。','《真话报》是中共江苏省委机关报，社址在九江路山东路东首410号半（今九江路山东中路路口）。《真话报》于1932年5月29日在上海创办，主编潘梓年。该报主要内容是宣传中国共产党的政治主张，刊登中央及江苏省委领导人的讲话和文章，并报道红军反“围剿”斗争。1933年1月25日后，《真话报》一度停办05月，潘梓年被捕。1935年5月2日，报纸复办。同年7月28日，报纸终止。','全国总工会印刷所遗址位于新庆余里（今浙江中路天潼路之间的北京东路北侧）。20世纪20年代末30年代初，是上海“海派小报”大泛滥时期，从1927年到1931年间出版近700种报纸。中共转入地下后，为应对国民党的文化“围剿”，出版了不少貌似“海派小报”而实际进行革命鼓动、报道各种工农革命消息的革命报刊。1929年年底，全国总工会在新庆余里建立印刷所，名为“华大印刷所”，负责人方慕韩（王承纬化名），承印外来印件。该印刷所于1931年年底结束。',
                        '中共杨树浦部委机关遗址位于华德路斯文里13号（今长阳路荆州路路口一带）。1926年初，中共杨树浦部委机关设在此处，张叔平担任部委书记05月30日，“五卅”惨案一周年，杨树浦地区工人队伍在党和团的部委领导指挥下举行示威活动。1927年2月下旬，中共中央军委书记周恩来亲临此处，召开会议研究第三次武装起义事项。3月7日，中共杨树浦部委和中共引翔港部委合并为中共沪东部委04月10日，中共杨树浦部委原书记谢文锦被国民党反动派逮捕，数日后牺牲在雨花台。','中共中央秘密印刷厂位于爱文义路（今北京西路）张家宅路73弄48号。1930年初，中共中央秘密印刷厂在上海建立。为逃避敌人的搜捕，印刷厂几易其址。1931年春，印刷厂在齐物浦路建立，后搬到梅白克路（现新昌路），又搬到麦特赫斯脱路（今泰兴路）、武定路。1932年冬，又搬到北京西路张家宅路。印刷厂在险恶的情况下，克服种种困难，印刷《红旗周报》《布尔塞维克》等党的刊物。此外，还印刷从苏区带来的材料和支持罢工斗争等文件。','读书生活出版社原位于斜桥弄（今吴江路）71号。1936年3月，李公朴在此成立读书生活出版社，自任社长，柳浞担任出版社主任，编辑部主任为艾思奇，经理兼业务部主任为汪仑（“左联”盟员）。艾思奇与柳浞是中共地下党员，他们与李公朴密切配合。读书生活出版社成立后，出版了一批传播马列主义、宣传抗日救亡的书籍，后遭到国民党当局的查禁。', '圣工小学创办于1946年9月，校址设在沪东地区的福禄街195号（后为平凉路第一幼儿园）。1947年，校长林道增经党组织思想动员，走上革命道路。圣工小学的教师们积极参加中共地下党领导的小学教师联合进修会（简称“小教联”）组织的各种活动，提高了思想觉悟。教师们还参加“抢救教育危机…‘改善教师生活”，向市参议会和教育局请愿活动等。', '时代出版社位于斜桥弄（今吴江路）60号。1941年，时代出版社由苏联塔斯社社长罗果夫创办于上海，社址初设于斜桥弄，后迁入南京路（今南京东路）377号。并在北京设立分社，在杭州、南京设立分店。曾出版西蒙诺夫的《日日夜夜》、柯涅楚克的《前线》等。在日寇侵占租界后，其凭借苏商名义和苏日外交关系，成为唯一能够继续揭露德国法西斯的残暴、报道苏军的战绩和宣传苏联文化、卫国战争文学的出版机构。上海解放后，时代出版社迁往北京。1955年，与商务印书馆合并后宣告结束。',
                        '钱亦石曾在上海法政学院工作过。钱亦石加入中国共产党后，奉命以个人身份加入国民党，协助董必武筹建国民党湖北临时党部。1928年大革命失败后，钱亦石奉命和杨贤江、董必武领导东京留学生中的共产党秘密组织。1930年，他化装成铁路工人回到上海，从事文化活动。1932年，经党组织联系，钱亦石被聘为暨南大学和上海法政学院的教授。在教授岗位上，钱亦石发表多篇论文，用马克思主义理论分析时局，获得党内外的高度评价。上海法政学院原名上海法政大学，创办于1924年秋。1926年，迁入法租界金神父路（今瑞金二路）450号自建校舍。', '著名文学家楚图南曾于抗战胜利后\n\n    居于西宝兴路一民居内。\n\n    楚图南(1899-1994)，著名的文学家、社会学家。曾用名楚介青、楚贞、楚曾，云南文山人。1920年，加入社会主义青年团。1923年，毕业于北京高等师范学校（今北京师大）史地系。1926年，加入中共。同年，被中共北方区委派到哈尔滨从事革命活动。1943年，加入中国民主同盟，是民盟云南省支部负责人之一，为团结广大知识分子做了大量工作。1945年，当选为民盟中央执行委员。1946年到上海，任上海法学院教授，时常发表演讲，旗帜鲜明地支持中共政策。由于时局凶险，转到香港等地进行盟务活动。1948年年底，到河北省平山县中共中央所在地工作。1949年，随军进入北平，参与文教接管工作，出席了中国人民政治协商会议第一次全体会议。', '瞿秋白旧居位于王家沙鸣玉坊（今南京西路646弄），这里也是中共江苏省委机关的所在地。1933年6月，瞿秋白因工作需要搬到这里居住。当时，冯雪峰任江苏省委宣传部部长，通讯社暂交瞿秋白管理。瞿秋白不便在外露面，暂时与冯雪峰同住，以便冯雪峰帮他做联系的工作。不到两个月，江苏省委机关就被敌人发觉。于是，瞿秋白、杨之华搬到鲁迅家暂住，冯雪峰则租住在静安寺路（今南京西路）静安别墅。', '中国国民党临时行动委员会印刷机关位于圣母院路（今瑞金一路）35号。1930年8月10日，临时行动委员会正式成立后，把宣传工作置于非常重要的地位，开办两个印刷机关：由施方白出面在圣母院路（今瑞金一路）35号用水果店的招牌设立大白印刷厂；在愚园路612号设立大同印刷厂，专印内部文件和宣传品。党员还经常在夜间上街刷写反帝反蒋的标语，在闹市的高楼散发传单。',
                        '卜万苍旧居位于淮海中路2006弄内。当时的霞飞路地区文化机构云集，文化名人聚集，许多著名的电影导演、明星都聚集在此处，卜万苍也曾居住于此。卜万苍(1903-1974)，安徽天长人，著名导演。1931年，加入联华公司，公司在淮海中路2006弄建有摄影棚，“联华”初期作品多出自其手。左翼电影运动中，执导了《三个摩登女性》《母性之光》两部“联华”最早和最重要的左翼电影。上海“孤岛”时期，为华成公司导演了借古讽今的《木兰从军》《貂蝉》《苏武牧羊》等片。', '1930年，住在赫德路嘉禾里1476号的祖父迂回杭州，郁达夫夫妇搬进祖父的房间。这里有多个天井，面积也比原来的大一些。屋内家具依然简单，楼上只有5尺大木床和写字台、凳子、梳妆台各1张；楼下只有1张书桌、2只凳子。这里见证了郁达夫和王映霞的爱情，他们俩先后生下3子1女。1933年，因生活、经济等缘故，郁达夫举家返回杭州。嘉禾里（后为常德路81弄）房屋已被拆除，其址约为越洋国际广场。', '余姚路321弄和胶州路静安区教育学院及胶州大厦一带，在抗日战争期间曾是著名的“孤军营”。1937年10月31日到1941年12月28日，以谢晋元为首的377位抗日勇士，被公共租界当局羁留于此。这些官兵原是为了掩护中国军队从上海撤退，受命坚守四行仓库，为了壮声势，对外号称有官兵800人，因此，外界称为“八百壮士”。他们守卫四行仓库四昼夜，日军久攻不下。但租界方面担心被战火波及，要求他们撤退，并且许诺会将官兵送往沪西归队。不料，官兵们刚进入租界便被拘押在余姚路一处堆场达四年之久，上海市民因此称他们为“孤军”，称此拘押地为“孤军营”。“孤军”在租界中一直坚持抗日斗争，营地因此被时人称为“小重庆”。1941年，公共租界沦陷，“孤军”全体被臼军羁押，“孤军营”历史结束。', '文明印务局遗址位于新闸路638弄（西斯文里）23号。1926年初，中国共产党在上海筹办的国华印刷所和青云路青云桥印刷所，相继遭北洋警察抽查而暴露，于是党组织决定将印刷所迁至公共租界，分设两个工厂。-个开设在此，改称文明印务局；另一个设在新闸路鸿祥里，改称中兴印刷所。1926年年底，中央在汉口筹创长江书店印刷厂将鸿祥里的机器全部带走。文明印务局留存部分由毛泽民等负责，在经过多次搬迁后于1933年结束。如今，西斯文里已拆，旧址不存。',
                        '1952年，时任上海市常务副市长的潘汉年搬入坐落于复兴西路和武康路路口的武康路99号。\n\n    这是一座英国式的著名花园洋房，建于1928年。该建筑为上海英商正广和洋行总经理麦克·格里高所建，曾是英商正广和汽水公司大班的住宅。抗战期间，正广和老板被日军关入集中营，这里成为上海海关掌握关税大权的监督唐海安的官邸。太平洋战争爆发后日本势力进入租界，这栋房子沦为日本高官的住宅。抗战胜利后，著名实业家荣宗敬先生的女儿荣卓如和女婿乔奇·哈同夫妇将其买下。\n\n    中华人民共和国成立后，此处作为市委招待所。魏文伯、潘汉年、王震等领导人曾在此住过，各省市的主要领导来沪时亦曾下榻此处。“文革”前，这里是华东局机要局的办公处，“文革”时为上海市征兵办公室，后为上海声学研究所使用。1983年，著名实业家、民主人士、为国家作出过特殊贡献的刘靖基年迈回沪，落实政策时，政府安排其全家入住这栋洋楼。\n\n    现为民居。', '1919年秋，上海留法勤工俭学会和中华职教社共同发起创办上海留法勤工俭学预备科，地址设在中华职业学校（今陆家浜路918号上海商业会计学校）。上海留法勤工俭学预备科根据学生法语程度，分甲、乙两组。法语过关者，重点学习工艺技能，编为甲组；不通法语者，白天上法语课，夜间学工艺，编为乙组。每天在中华职业学校开设的工厂实习4小时。当年10月，正式开班。报名参加学习的多为江苏、浙江等地的青年学生，也有外省来沪候船赴法勤工俭学的学生。1920年4月，留法勤工俭学预备科结业，其中26名毕业学生于5月赴法读书。', '复兴东路1047弄3号曾是大革命时期党的权威性刊物《向导》周刊编辑部所在地。\n\n    1922年9月13日，《向导》在沪问世，系16开本，刊头下标明为“周报”，蔡和森担任主编，参与编辑和撰稿的先后有陈独秀、李大钊、瞿秋白、高君宇、彭述之等，毛泽东、周恩来、李立三等也写过文章。蔡和森在《敬告本报读者》中申明，《向导》是“中共政治机关报”，又是“中国民众的喉舌”，“是真正代表中国民众利益的报纸”，“是中国劳苦同胞的忠实好友”。\n\n    蔡和森主编《向导》将近三年，以顽强的精神克服经济拮据等困难，坚持出刊150期。该刊开始是每期8页，他为了满足读者需求，从第142期起增至12页，至第144期又加到16页：在编辑方面本来是依照稿件内容排列，他出于增强针对性和突出重点的考虑，相继开辟“时事评论”“寸铁”“各地通讯”“余录”“什么话”等栏目。他还自己动笔撰写了大量政论、时评，无论是五六千字的长文，还是数百字的短稿，都能抓住现实中的重要问题或典型事例作具体分析，说理透彻，观点鲜明，颇有说服力。\n\n    由于蔡和森等人的辛勤努力，《向导》周刊在上海大获成功，发行量从最初的三干余份，直升至两万余份。\n\n    原址已拆除。',
                        '中共中央秘密印刷厂位于麦特赫斯脱路（今泰兴路）386号。1930年初，中共中央秘密印刷厂由毛泽民筹设，负责人钱之光以烟纸店老板身份作掩护开展工作。印刷厂的任务是刊印苏区来的文件、文章，刊印宣传形势、罢工斗争的传单，出版《党的建设》《红旗周报》《布尔塞维克》等刊物，直至1932年夏结束工作。印刷厂多次迁移。1932年夏，印刷厂搬到麦特赫斯脱路（今泰兴路）386号的三层楼房子里。但在调试机器时，工作人员发现噪声很大，无法隐蔽。为保安全，很快放弃该地。', '杨树浦路2800号杨树浦发电厂曾是中共党员、革命烈士王孝和同志工作和生活的地方。王孝和（1924-1948），浙江鄞县（今宁波）人。1938年入上海励志英文专科学校学习。1941年，加入中国共产党。1943年，进美商上海电力公司火力发电厂工作。1948年，在厂内以工会常务理事的合法身份开展革命活动，领导电厂工人开展声援上海申新九厂工人大罢工的斗争，4月遭国民党当局逮捕。在法庭上，他公开揭露国民党反动派的阴谋，9月英勇就义。杨树浦发电厂今已停产，厂内老建筑仍存。', '惠知小学原位于惠民路424弄32号（今惠民路荆州路一带）。1936年，惠知小学由“左联”成员甘迈筹建，并将自家春阳里（惠民路424弄）32号客堂和亭子间做教室。半年后，惠知小学在春阳里租赁了两幢楼房作为校舍。“左联”解散后，校长甘迈参加国难教育社，惠知小学也成为抗日宣传中心之一。宣传抗日的歌咏队、戏剧组常来校指导，学校师生曾到附近开展抗日文艺宣传活动。1937年“八一三”事变后，校长甘迈离沪去延安，惠知小学就此停办。旧址已被拆除。', '1930年2月，鲁迅因参加中国自由运动大同盟和左翼作家联盟，受到国民党当局的通缉，于3月19日至4月19日，被迫避难于日本友人内山完造的家中，地址是四川北路1881弄。内山完造，日本冈山人，自1913年起定居上海。1916年，内山完造在四川北路魏盛里（今四川北路1881弄，已拆除）租了一所房屋定居。为贴补家用，1917年，他们在住所楼下开了一家小书店，定名为“内山书店”。十月革命后，内山完造刻印日本出版的社会主义新书目录，介绍给读者。1927年，鲁迅与内山完造在书店相识，结为挚友。鲁迅在晚年受国民党当局迫害多次遇险，内山完造曾四次帮助他避难。两人的友谊成为中日交流史上的一段佳话。',
                        '“新时代丛书”社暨李汉俊旧居旧址位于望志路106、108号（今兴业路76、78号）。1921年初夏，李大钊等15人发起建立《新时代丛书》社，通信处设在望志路108号。同年7月，中共一大在望志路106号（今兴业路76号）召开时，突然受密探骚扰，代表们迅速转移。十几分钟后，巡捕前来搜查，李汉俊用“新时代丛书”社名义与之周旋。巡捕们得知这里是公开编辑机构的联络地点，于是搜查较马虎。1958年5月以后，中共一大会议正式确认在兴业路76号楼下召开。', '上海工人第三次武装起义罗亦农办公室位于北四川路（今四川北路）东四卡子桥附近。1925年12月至1927年4月，罗亦农任江浙区委书记。他是我党第一个提出举行工人武装起义的领导人，也是第一个提出建立工人与小资产阶级联合政权的领导人。1927年3月21日，在北伐节节胜利的形势下，上海工人发动第三次武装起义。武装起义由中共中央军委书记兼江浙区军委书记周恩来任总指挥，同中共江浙区委负责人罗亦农、赵世炎一起负责领导工作。第三次武装起义获得成功。', '上海中国职业妇女俱乐部旧址在南京路120号（今南京东路114-142号）慈晶大楼三楼。1938年5月5日，上海中国职业妇女俱乐部（简称“职妇”）成立。俱乐部主席茅丽瑛是共产党员。1939年，“职妇”中共支部在6、7月间募捐到大量食品、药品和日用品，并举办“物品慈善义卖会”，开展义卖活动。义卖募款除满足新四军棉衣所需款项之外，还拿出2300元救济难民。筹集到的资金立即转交给新四军驻沪办事处和难民救济协会。1939年12月12日，茅丽瑛在此遭特务秘密暗害。', '中共沪东重工业委员会联络点位于盐山路309弄7号（今盐山路近齐齐哈尔路北侧）。1943年5月，沪东地区设立中共沪东重工业委员会（简称“沪东重工委”）。1944年，沪东重工委联络点设在盐山路309弄（南泰成里）7号。1945年5月，工委撤销中共沪东重工委。1945年10月，又恢复中共沪东重工业委员会，联络点仍在原处。直到1947年11月，中共上海市工委决定建立中共机器工业委员会，统一领导全市机器厂、钢铁厂等党组织，中共沪东重工业委员会工作结束。旧址已拆除。', '董健吾，被誉为“红色牧师”。他早年毕业于圣约翰大学。1927年，加入中国共产党。1929年，在上海参加中央特科工作。1930年，开办大同幼稚园，收养革命领导人的儿女以及烈士遗孤。当时，董健吾夫妇曾在霞飞路尚贤坊（今淮海中路358弄21号）居住过。',
                        '徐懋庸旧居位于金神父路花园坊（今瑞金二路129弄106号）。徐懋庸(1911-1977)，浙江上虞人。1933年春，徐懋庸来到上海。胡愈之介绍他为生活书店译书，他就在金神父路花园坊租赁一个亭子间，专心从事翻译工作。1933年，参加中国左翼作家联盟，任常委、宣传部部长、书记。1935年，出版《打杂集》，文风泼辣，鲁迅为之作序。同年，翻译日本、苏联等国的进步著作，后来前往延安。', '徐鸿、柳湜旧居位于原辛耕路天钥桥路赵巷10号。1925年起，徐光启的第14代孙徐凤岐因家贫在赵巷10号居住。他有两位女儿。二女儿徐鸿，5岁做童工，10岁进入五洲药厂，与中共地下党员关露成为好友。关露时常留宿10号徐鸿家。在关露的引领下，徐鸿走上革命道路。1935年，关露向徐鸿介绍了柳浞。柳湜(1903-1968)，湖南长沙人，著名社会活动家和上海抗日救亡运动负责人之一。受到本家兄弟柳直苟等进步思想影响，1928年2月加入中共。1937年1月3日，柳浞与徐鸿在赵巷10号结婚。新婚后，他俩还一起去苏州探望被关押的沈钧儒等“七君子”。1938年7月，徐鸿入党，介绍人是柳浞和胡绳。后徐鸿去往延安。徐鸿的姐夫是查阜西。查阜西(1895-1976)，江西修水人。1923年加入中共，1927年与党失去联系后来到上海，婚后居住赵巷10号，后任欧亚航空公司副总经理。1946年，经连襟柳浞劝说，参与策划中国航空公司和中央航空公司起义，史称“两航起义”。赵巷1号至18号于1993年拆迁，其位置南自辛耕路起，北至天钥桥路69弄丙支弄。', '萧军旧居位于原法租界拉都路慎成里（今襄阳南路351号）。萧军(1907-1988)，原名刘鸿霖，辽宁义县人。早年从军后从事文学创作，1934年到上海，得到鲁迅亲自指导，参加《海燕》和《作家》等杂志的编辑工作。1935年4月2日，萧军、萧红的居住地址泄露，转移搬迁到拉都路。当年，这里是临近上海郊区的城乡接合部。房子是新盖成的砖房，但里面的条件比较简陋。这是一座假三层的红瓦红砖西式楼房。萧军、萧红当年住在顶层的假三层中。1935年5月，鲁迅、许广平曾带着周海婴，来到这里做客。萧军的《八月的乡村》就是在这里完成并开始排印。萧军、萧红在拉都路住了约一个多月，后又迁往他处。现该处为民居。此外，萧军还曾在霞飞坊（今淮海中路927弄）短暂居住过。', '赴法学生上海会集所遗址位于法租界嵩山路56号，后迁至麦赛尔蒂罗路（今兴安路）67号，为各省勤工俭学学生在沪候船易于集合而设。起初，各省赴法学生到沪后，居住分散而又不通声气，相互间的联络与协同多有不便。1919年9月，一些学生便在嵩山路56号组成赴法学生上海会集所，用以联络感情，磋商赴法事宜，并代办简易行装，兼可膳宿，很受赴法青年们欢迎。后来因为嵩山路56号的房屋已较为狭小，又租赁麦赛尔蒂罗路（今兴安路）67号的房子。当年，赴法学生上海会集所在有效组织、统一安排各地勤工俭学学生迅速乘船赴法方面发挥了较大作用。', 
                        '曹家花园旧址位于漕溪路203号漕溪公园内。公园始建于1931年，1935年落成。南半部原为上海棉布商曹钟煌祖坟所在地，取名“曹园”，又称“曹氏祠堂”。因在墓旁建园，故又称“墓园”，习称“曹家花园”。园内有仿古式琉璃瓦建筑物，有太湖石假山、喷泉及雕刻精细的亭廊。1947年反内战、反饥饿运动爆发后，国民党将逮捕的六七十名学生关押于此。1957年5月，经修缮辟为公园。1958年6月开工改建，同年9月全面整修竣工，10月对外开放，定名为“漕溪公园”。', '中兴印刷厂旧址位于天潼路顺和里28号（今天潼路478弄12号）。中兴印刷厂创办于1945年8月，是中共上海党组织的一个地下印刷机构，由中共党员陈祥生任经理。该厂主要秘密承印《新华社电讯》、中共代表团驻沪办事处内部文件、资料及进步书刊。1946年初，改由中共党员毛齐华（化名“周先生”）总负责，党员侯时中任经理，党员马纯古任“跑街”。中共地下党负责人刘长胜、张祺、陈公琪等常在此碰头、联络。1948年春，陈祥生、侯时中先后被捕，中兴印刷厂撤销。', '中共大连坊秘密排字厂遗址原位于唐山路974弄（大连坊）26号（今唐山路大连路路口）。1933年春，因戈登路椿荫坊26号（今海防路昌平路之间的江宁路西侧）第五个秘密排字厂的柳宗陶在厂外被捕，工厂仓促转移。同年夏，在大连坊重新筹建第六个秘密排字厂）由毛元耀在厂外和领导人于益之接头；厂内由杜延庆负责，共有7人。在此工作一段时间后，根据秘密工作要求，排字厂即行转移。', '《联合日报》社位于原汉口路274号《新闻报》大楼。1945年9月21日，刘尊棋联络王纪华、冯宾符等新闻出版界人士，租用《新闻报》大楼，创办《联合日报》。该报从各方面对大后方的情况进行报道，特别是对国民党的腐败无能和种种丑闻作了生动的介绍。后迁至中正东路（今延安东路）172号原《华美晚报》馆址。不久，该报被迫于1945年11月30日停刊。停刊后，报社同人并未走散，曾请示中共上海局领导，争取复刊，但考虑到恢复日报已不可能，决定另出晚刊，并定名为《联合晚报》。《联合晚报》成为抗战胜利后中共在上海的重要公开宣传阵地。', '中共中央沪东印刷厂位于扬州路346弄三民坊（后改为爱民坊）。1933年，中共中央在沪东几处地方设立过印刷厂，最初该厂位于大连路大连坊26号，后迁到保定路，还有东有恒路（今东余杭路）2048号。1933年年底，中共中央秘密印刷厂又转移到扬州路三民坊（后改为爱民坊）弄底的一幢楼房内。印刷厂对外以民居为掩护，内部分排字、印刷、发行等几个部门。平时对各种印刷、排字设备都进行伪装隐蔽，不易被外人发现。该厂曾先后印制过《共产主义的ABC》《八一宣言》等。1935年，印刷厂负责人被捕，林一心等人将设备等装箱后转移，运到外地去另建印刷厂。旧址已拆除。',
                        '四行仓库抗日纪念地位于光复路1号（西藏路桥堍，原苏州河北岸泥城桥堍），是一幢六层楼的钢筋水泥建筑，位于苏州河边。\n\n    1937年10月，国民革命军在上海闸北与日军交战接连失利。10月26日，蒋介石命令该区所有军队撤出，仅令第88师单独留守，掩护其他部队后撤。第88师孙元良命令第524团团副谢晋元率领该团一个营420余人据守闸北四行仓库。\n\n    四行孤军与共产党有密切关联。四行孤军中大半来自湖北省通城保安大队，其中有些士兵来自革命根据地。通城保安大队所属湖北保安第5团于1937年10月上旬在汉口登上列车，经过5天5夜到达上海真如。两个中队补充到88师，故而在四行孤军中通城籍官兵竞达200余人。如谢晋元的卫兵万连卿，曾是通城共产主义儿童团团长；第3中队中队长石美豪曾打算参加红16师，但未成功；下士卢鸿信曾带10名士兵，携械投奔红16师；等等。这些来自鄂南山区的、第88师的第5批补充兵，用青春、鲜血与生命谱写了一曲抗日战歌。\n\n    从10月27日起，谢晋元部官兵与日军展开激战，周旋3昼夜，毙敌百余名，仍保有四行仓库阵地。10月31日凌晨，谢晋元奉命率军退入公共租界。\n\n    1985年8月，四行仓库抗日纪念地被公布为上海市纪念地点。2014年4月，调整公布为上海市文物保护单位。2015年8月13日，在旧址上建立的上海四行仓库纪念馆正式对外开放。2019年，被列为全国重点文物保护单位。', '工余义务夜校位于平凉路1318弄和渭南路359弄内，后移到平凉路新华里1298弄21号。1941年秋冬，张森、季宝贤等组成“工余研究会”。1942年春，工余研究会在西文德里开办工余义务夜校。中共沪东地下党得知后，派党员到校担任教师。1945年“五一”前夕，夜校在教室召开“工余夜校成立三周年纪念会”，后与同舟工利义务夜校教师进行联欢座谈。由于敌人混进与会人员，5月30日，两所夜校10多位教师被捕，被迫停办。旧址保存，现为民居。', '蔡元培旧居位于愚园路884号。1932年年底，蔡元培搬到愚园路884号，并在此住了5年。1937年10月，蔡元培搬到了海格路175号（今华山路303弄16号）。居住愚园路期间，蔡元培参与发表民权演词，营救廖承志、丁玲等活动。国民党当局对中国民权保障同盟极为忌恨，派特务暗杀杨杏佛。蔡元培不顾安危，主持杨杏佛祭奠仪式，另外积极营救范文澜、李默农，要求当局取消对《生活周刊》的查禁。该建筑现已拆除。','七号桥碉堡旧址位于漕宝路2005号。抗日战争时期，日伪军队在七号桥东堍建起一座两层碉堡式岗楼。1945年8月，汉奸李连杰部占据七号桥碉堡08月19日，新四军淞沪支队支队长朱亚民率部袭击，但终未能攻克。1949年1月，国民党汤恩伯部为固守上海建成了以七号桥碉堡为核心的子母堡防御体系。5月24日，解放军先头部队攻下七号桥碉堡。七号桥碉堡至今完好保存。1995年3月，被命名为闵行区爱国主义教育基地。2014年，公布为上海市文物保护单位。',
                        '上海人民广播电台旧址位于大西路7号（今延安西路129号）。1948年年底，中共派员联系国民党上海广播电台的个别播音员和技术人员，动员他们团结员工保护电台财物。1949年5月25日，解放军攻入上海苏州河以南地区，占领位于大西路7号的国民党上海电台。凌晨，中共地下党员邹凡扬赶到电台，要求电台停止所有广播，改播解放军入城布告和上海解放新闻稿。同时，进步学生组成的“人民保安队”也赶来保护电台。1949年5月27日，上海人民广播电台宣告成立。2019年5月26日，在旧址处设立“上海人民广播电台原址”铭牌。','陶晶孙旧居位于北四川路永安里（今四川北路1953弄）。陶晶孙(1897-1952)，原名陶炽、陶炽孙，江苏无锡人。早年赴日本学习医学，结识郭沫若，参与发起成立创造社。1929年1月，陶晶孙从日本回国，最初在北四川路（今四川北路）永安里居住，后迁居燕山别墅（今多伦路257弄）。陶晶孙在潘汉年等人的引导下，参加左翼文艺运动。1929年4月1日，他和郁达夫同往景云里拜访鲁迅。中国左翼作家联盟筹备期间，他利用《大众文艺》这一阵地配合“左联”的筹备，有效地贯彻了“左联”的文艺方针。20世纪30年3月2日，他出席中国左翼作家联盟成立大会，为“左联”发起人之一。当月，他负责编辑的《大众文艺》即成为“左联”机关刊物。20世纪30年代起，陶晶孙主要从事医疗卫生、医学教学和医学研究工作，成就卓著。1937年后，定居施高塔路施高塔里（今山阴路216弄）2号。该三处建筑均尚存。','李白贝勒路电台位于贝勒路（今黄陂南路）148号，这是一幢临街的三层楼房子，这是李白在上海设的第一座电台。\n\n    1937年抗日战争全面爆发后，李白奉党中央之命到上海从事与党中央的秘密通报工作。10月10日，化名“李霞”的李白到达上海。根据组织的安排，秘密电台设在贝勒路148号。房子主人单志伊曾是国民党高级军官，当过孙中山的秘书兼日语翻译，同李克农家是世交，“四一二”事变时曾经保护过李克农，此后经常援助李克农。李白住进贝勒路148号，为了隐蔽和安全，他把收发报机装在两只皮箱里，白天放在二楼，同主人家里的皮箱混在一起，到晚上11点后，上三楼发电报。李白通过电台，及时向党中央报告了日军的配备情况、侵略动向、国民党军队的防御情况、国际上对我国进行抗战的反应，以及上海党组织开辟郊区游击战的进展等，同时也传递了党中央、毛主席的重大决策和重要指示，为革命事业发挥了重要作用。1939年2月，转移到蒲石路（今长乐路）蒲石村12号。\n\n    原建筑在旧区改造中被拆除。', '中共沪东机器业联络点位于平凉路123-127号楼上（今平凉路大连路路口）。1949年2月初，为适应解放上海的新形势，沪东机器业联络点设在平凉路123-127号楼上，周辛吾任书记。原址已不存。',
                        '北火车站“六二三”集会地位于天目东路200号。1946年，鉴于全面内战的危险已迫在眉睫，上海市各界群众团体举行全市性的示威游行。中共上海地下党的负责人刘晓和刘长胜决定，一方面由上海人民团体联合会和上海学生争取和平联合会出面发动群众推选和平请愿团的代表；另一方面，动员组织广大群众准备届时去北火车站欢送请愿代表并游行示威，以造成声势、扩大影响。经协商，推选出了马叙伦等9名人民代表和陈震中、陈立复2名学生代表。\n\n    6月23日，5万多名各界群众从四面八方赶到上海火车站，欢送上海人民和平请愿团，并举行欢送大会。送走代表以后，学生队伍带头举行了长达5小时的示威游行。“要求和平、反对内战”的口号声响彻广场的上空。\n\n    北火车站“六二三”集会地遗址于1999年被静安区人民政府公布为静安区文物保护单位。2004年8月，遗址上改建成上海铁路博物馆。', '巴金旧居位于宝山路宝光里14号。1928年年底，巴金从法国回到上海。第二年元旦，巴金搬至宝山路宝光里14号楼下的客堂间。他的小说《灭亡》开始在《小说月报》上连载。同年，他译完克鲁泡特金自传。1931年春，开始撰写长篇小说《春梦》。在此期间，巴金还创作了小说《新生》。在宝光里，巴金完成了他的代表作《家》。宝光里被日军轰炸后，巴金被迫搬到法租界的亚尔培路（今陕西南路）步高里52号居住。', '华东模范中学创办于1945年，最初借用私立民光中学校舍，位于原胶州路2号（今胶州路15号），1946年迁至曹家渡康定路永和村18、19号，是解放战争时期的民主堡垒学校之一。1945年建校后，学委派左淑东来校开辟党的工作，后教委又派杨学敏到校加强领导。学校办学目标明确，并重革命教育与革命文化。在第二条战线反美反蒋民主运动中，该校学生走在前列，先后有33名学生入党。学校又是西区教师运动基地。解放前夕，因形势需要与复夏中学合并。上海解放初，60多名学生加入西南服务团，10多名参军。教师和另一部分学生参加上海的接管工作，学校宣告结束。鉴于华东模范中学的光荣革命传统，1983年经市教育局决定在富民路43号复校。现华东模范中学已成为静安区青少年教育基地、上海市文明单位和全国现代教育技术先进单位。', '1937年8月13日，日军进犯上海，致使闸北、南市、浦东等地大批难民涌入租界避难，流落街头，引发一系列的社会问题。为救助难民，维持社会秩序，上海各界纷纷利用学校、会馆、商场等地方设置收容所安置难民。8月15日，法国人慈善家饶家驹在震旦大学校园里（今重庆南路227号，上海交通大学医学院内震旦学院旧址一舍、四舍、八舍）成立第一国际难民收容所。当时，中共党员潘大成参加文化界救亡协会，结识黄定慧等人，黄定慧介绍他参加难民救济工作。潘大成到第一国际难民收容所工作，任副总干事，协助饶家驹救助难民，后来任总干事。1938年6月，第一国际难民收容所成立中共党支部。经各方努力，部分难民到苏北参加新四军。',
                        '上海印刷工会位于芝罘路鼎余里。上海印刷工会是上海最早的工会组织之一，也是最早的上海新闻工人团体。1919年7月29日，上海五彩石印工人自发成立印刷职工联合会制版分会。随后，上海印刷工人在中国共产党帮助下，于1922年元旦正式成立上海印刷工会，积极参加大革命和反对帝国主义侵略的爱国活动。1947年后，该会被迫转入地下活动，直至上海解放后恢复活动。上海印刷工会于1949年10月23日更名为中国新闻出版印刷工会上海市委员会。', '许广平旧居暨《鲁迅全集》第一版编辑部旧址位于淮海中路927弄64号。许广平(1898-1968)，广东番禺（今属广州）人，鲁迅夫人。1936年鲁迅逝世后，许广平迁入霞飞路霞飞坊（淮海中路927弄）64号，居住于二楼，三楼为专门收藏鲁迅遗物和藏书的地方。1938年4月，许广平与胡愈之等人商议由复社出版《鲁迅全集》，于是这里成了《鲁迅全集》编辑部，仅4个月后第一版《鲁迅全集》就正式出版。她还在这里编辑《鲁迅三十年集》。该居所现仍存在。', '上海公共体育场旧址位于方斜路515号沪南体育活动中心。上海公共体育场于1917年3月30日落成，既是上海最早由国人自建的公共体育场，也是五四运动到“八一三”淞沪会战前夕上海革命群众举行集会的场所。1919年5月7日，为声援北京学生五四爱国行动，反对在巴黎和约上签字，上海各界人士2万余人在公共体育场召开国民大会，高呼反帝和惩办卖国贼口号，要求释放被捕学生，会后游行。《民国日报》谓：“此沪上民气发扬之第一次，诚未可轻视！”1937年“八一三”事变时，体育场被日军炸成废墟。抗日战争胜利后，在该址重建上海市体育场南市分场。1949年5月，由上海市人民政府接管，改名为“沪南体育场”。1959年5月，公布为上海市文物保护单位。1977年12月，公布为上海市纪念地。2014年，调整公布为上海市文物保护单位。1997年，改建为具有多功能设施的沪南体育活动中心。现为上海市黄浦学校。', '1948年中国国民党革命委员会上海临时分会暨叶尚文旧居位于赫德路（今常德路）60号。1948年上半年，叶尚文（原名叶敞）和邓本殷等人商议在上海成立民革组织。他们决定派叶尚文到香港向民革总部请示，民革主席李济深在香港接见叶尚文并同意在上海建立民草地下组织。12月，叶尚文返回上海，经过筹备，正式建立“民革上海临时分会”，会址设于叶尚文家。后因国民党恐怖政策日益严重，将办公和集会地点迁至会员周宝书家中，一些重要会议则分散在其他会员家举行。', '江浙留法同学会位于霞飞路（今淮海中路）协平里5号。留法勤工俭学运动是中国近现代革命史上的一件大事。青年知识分子在五四新文化和民主爱国运动的推动下，踏上到法国探寻救国之道的征途。伴随着大批学生的到来，沪上出现各种留学自助团体为留法勤工俭学做准备。1919年12月5日，由杨光证发起成立“江浙留法同学会”，总机关计划设在法国，并设招待所于上海霞飞路协平里5号。其目的在使赴法者以互助的精神减去各项困难。只要江浙两省有志赴法者皆有所接洽，不致他们受人地生疏之虞。至于登轮时搬运行李等事，均由该会职员为之照料，故登船时全无匆忙状态。', 
                        '1940年新四军上海办事处位于巨鹿路251号（今巨鹿路瑞金一路路口）。1940年，新四军在上海设立办事处，主任是杨斌。先后参加新四军上海办事处工作的约有40多人，李子明和蔡平夫妇以家庭形式为杨斌作掩护。办事处主要任务是配合中共上海地下党，从上海动员大量人员参加新四军，做好人员输送工作；组织运输军用物资和搜集报刊资料去根据地，同时还要做好根据地负责干部到上海治病的掩护工作。', '中共中央秘密联络点遗址位于北京西路1060弄内（原爱文义路望德里1239号半）。1927年，中共中央机关陆续从武汉迁至上海。因为这里当时属租界，各方杂处，居民集中，便于隐蔽和掩护，所以中共中央秘密联络点设在这里。\n\n    1928年4月15日，时任中共临时中央政治局常委的罗亦农由于叛徒的出卖，在这里被租界巡捕逮捕。为掩护同志，罗亦农神态自若地随敌人离开此地。这是大革命失败后中央机关迂回上海遭到的第一次重大破坏。罗亦农被捕后，周恩来等积极组织营救，但由于其身份暴露，所有营救方案均未能奏效。三天后，罗亦农被引渡到国民党龙华淞沪警备司令部。在狱中，敌人无论是用高官厚禄引诱，还是用严刑拷打逼供，都不能动摇他的革命意志。他曾用隐语给党中央写信，交代了未尽的工作，表达了视死如归的决心，勉励同志们继续战斗。他给元旦刚结婚的妻子李文宜的遗书中说：“望你学我之所学以慰我。”4月21日黄昏，罗亦农在龙华慷慨就义，年仅26岁。\n\n    原址已拆除，该处现为商场。', '中联广播电台遗址位于大沽路411弄4号（今大沽路延安公园北端）。1946年3月，中共上海地下组织创办的中联广播电台正式开幕，台址在大沽路411弄4号。该电台曾在《申报》《新报》两报上刊登广告。节目内容除越剧、沪剧、评弹、滑稽、甬剧等娱乐节目外，还办有少儿、音乐、文学、学术等节目。该台在播音四个月后，被国民党政府的电信局和淞沪警备司令部借口“整顿上海市广播电台”查封。这是中共地下党组织在争夺宣传阵地上所作的一次有益的尝试。', '“爱用国货，抵制美货”委员会成立大会旧址位于南京东路劝工大楼（今南京东路328号）。《中美商约》签订后，美货挤占中国市场，民族工业面临危机。上海三区百货业工会号召“爱用国货，抵制美货”。1947年2月9日，根据中共中央指示精神，上海党组织在劝工大楼发起“爱用国货，抵制美货”运动，成立“爱用国货，抵制美货”委员会，上海各界代表400余人出席大会，郭沫若、邓初民等应邀出席演讲。大会刚开始，国民党特务便闯入施暴，造成13人重伤，数十人轻伤。这就是震惊中外的“劝工大楼血案”，也称“二九惨案”。惨案发生后，上海各界分别发表宣言，沈钧儒、史良等10名律师组成“二九惨案”律师团，声援斗争，国民党当局迫于舆论压力，对遇难者家属予以抚恤。原址现为上海雅戈尔大厦。', 
                        '沪东工人纠察队秘密军训处位于培凯尔路人寿里（今惠民路419弄）西弄过街楼上。1927年3月初，周恩来到沪东召开杨树浦部委所属5厂的党支部书记会，了解起义准备情况。按照周恩来的指示，部委开始组建武装纠察队。杨树浦部委找到当过兵的共青团员孙长胜，在培凯尔路人寿里西弄过街楼上开始对工人纠察队员进行军事训练。3月27日，沪东工人纠察队和闸北、沪西工人纠察队联合，共同夺取了上海工人第三次武装起义的胜利。旧址已被拆除。', '黄慕兰旧居位于华山路。1946年因房东违约，陈志皋、黄慕兰夫妇被迫搬离愚园路寓所，在通易公司董事长王艮仲帮助下，迁至华山路新居。华山路住宅由陈志皋亲自设计，是一所相当实用美观的小花园洋房。后通易公司不能复业，华山路住房由市政府收购抵债，1950年陈志皋、黄慕兰夫妇迁出华山路。1994年离休后，居杭州。', '为动员和吸收在职职工和失业、失学青年入学，中共江苏省委1938年初创办神州职业夜中学，学员主要是青年店员。晚上在沪青中学和敬业中学上课，课程有语文、英语、簿记与会计、哲学、政治经济学等学术讲座和不定期的时事报告与讨论会。曾为新四军输送过机要人员，举办过无线电技术训练班和邮电短训班多期。1939年冬停办。神州职业夜中学校址先后设于牯岭路振新小学、牛庄路770弄效实中学、新昌路三成坊人和小学、天津路等处。','中国国民党临时行动委员会总务委员会机关位于西摩路（今陕西北路）714号。1931年8月17日，淞沪警备司令部和法租界捕房查抄爱麦虞限路159号的临时行动委员会中央机关，沈维岳（即陈石）被捕，并被搜去大量党内文件、进步书籍和反蒋传单。同日，西摩路（今陕西北路）714号总务委员会机关被查抄，被抄去大量钱款，1人被捕；麦根路32号组织委员会机关被查抄，组织委员会主席委员郑太朴被逮捕；爱文义路（今北京西路）1389号宣传委员会和民运委员会机关也被查抄。','杨匏安旧居及其被捕处位于东有恒路（今东余杭路）2048号。杨匏安(1896-1931)，广东香山人，中共党员，中共五大上当选为中央监察委员。在国共合作时期，任国民党中央执行委员兼组织部秘书。由于中共军委干部胡章原叛变，在中共中央宣传部工作的杨匏安身份暴露。1931年7月25日，杨匏安被冲进家的国民党特工与公共租界巡捕强行逮捕，关押在警备部茅山殿看守所。杨匏安宁死不屈，最终英勇就义。','“红色谍王”理查德·左尔格是一名苏联派来中国的间谍。在上海的三年间，左尔格完成了苏联情报部门给他布置的任务。施高塔路（今山阴路）145弄2号是他在上海活动时的居所之一。\n\n    在上海活动期间，左尔格小组主要成员有史沫特莱、尾崎秀实、马克斯·克劳森、保尔·里姆、约翰、鲁特·维尔纳，还有张文秋、蔡叔厚、王学文夫妇、陈翰笙夫妇、董秋斯夫妇等中国组成员。左尔格抵达上海后，便入住华懋饭店（今和平饭店北楼），时间是1930年1月。由于间谍职业特征的要求，1930年底，他住进了法租界辣斐德路（今复兴中路）的一所公寓内。后来还曾入住施高塔路145弄2号、万国储蓄会公寓、马克斯·克劳森寓所等。而施高塔路145弄2号其实是尾崎秀实在上海的常住地址，他们一家1930年迁入，一直住到c调回日本大阪办事处为止。尾崎与鲁迅有一段交往，鲁迅称尾崎是“会讲一口流利德语的新闻记者”。\n\n    原址为上海市优秀历史建筑，现为民居。',
                        '李书城、李汉俊旧居位于白尔路三益里17号（今自忠路，济南路与顺昌路之间）。李书城与李汉俊是亲兄弟，李书城早年参加孙中山组织的同盟会，辛亥革命后来到上海居于此处。李汉俊自日本回国后，便居住在李书城寓所内。\n\n    1919年第一次护法战争失败后，孙中山指派戴季陶等人创办以“创造和改造世界”为宗旨的时事理论性刊物《星期评论》。《星期评论》创刊于1919年6月8日，以李书城、李汉俊居住的寓所为编辑部，并以介绍世界和中国的劳工运动而著名。主要编辑人员戴季陶、沈玄庐、李汉俊都是思想比较激进的知识分子。李汉俊还曾在日本留学时研究马克思主义，因此使得《星期评论》的政治倾向曰益“左”倾，对马克思主义和社会主义的正面宣传逐步增加。《星期评论》对先进知识分子的影响很大，声望与《每周评论》相当，被誉为“舆论界中最亮的两颗明星”。《星期评论》编辑部成员还有邵力子、陈望道、沈仲九、俞秀松等人，大多具有社会主义、无政府主义思想倾向。\n\n    1920年3月，陈独秀来到上海不久便与《星期评论》成员见面，一起参加向工人宣传革命思想的活动。1920年4月，陈独秀介绍维经斯基与《星期评论》社成员见面座谈，几经接触，维经斯基认为上海存在社会主义群体，是社会主义宣传的中心，应该成立共产主义组织。1920年6月，“社会共产党”组织成立，一开始称“社会党”，两个月后才定名“共产党”，它是共产党早期组织。除陈独秀外，几乎全是《星期评论》社成员。\n\n    《星期评论》社与中共创立紧密关联，中共早期领导人多次肯定并高度评价《星期评论》的历史地位。编辑部原址已经拆除，现在为翠湖天地雅苑。','1938年2月，为帮助解决上海的难民问题，上海佛教团体净业社在赫德路（今常德路）418号设立上海佛教净业妇孺难民收容所，在解决难民生活的同时，成立读书会、读报组、时事座谈会等，给难民一定程度的教育。难民收容所的主要负责人是赵朴初。收容所与中共关系密切，掩护过一些共产党员从事抗日活动。由于收容所的模式成功，赵朴初等人之后又牵头筹办了净业教养院。收容所旧址建筑现已不存。','《新华日报》驻沪办事处旧址位于静安寺路（今南京西路）587号。抗日战争胜利后，中共中央组成《新华日报》驻沪办事处筹备委员会，积极开展筹备工作。1946年3月21曰，正式宣布《新华日报》上海版筹备出版。次日，向国民党上海市政府社会局提出出版申请。面对上海《新华日报》出版条件均已具备的情况，国民党政府采取各种手段加以阻挠，筹备中的上海《新华日报》被扼杀，未能出版。','国华印刷所遗址位于香山路香兴里（今宝昌路临山路路口）。原是一幢一正两厢三开间旧式石库门里弄住宅，其为中国共产党在上海最早的一处秘密印刷机构，由毛泽民、徐白民、徐梅坤三人领导。1925年，中共开始在上海北火车站附近的香山路香兴里的石库门房子筹办第一个印刷厂。初创时，设备简陋，只有两部对开机、一步圆盘机（脚踏架）等。印刷所主要承印《向导》《中国青年》及全国总工会的一些宣传品等。同年9月，交通员在送党内文件清样至上级组织校阅途中遭遇巡捕搜身。印刷所有被查抄暴露的危险，遂停止工作，人员、设备全部撤离，印刷所转移至别处。国华印刷所旧址毁于日军炮火。',
                        '沙汀(1904-1992)，著名作家，其旧居位于横浜路德恩里（今东横浜路多伦路东南侧）。该建筑为砖木结构的石库门房屋，建筑面积100平方米。沙汀年轻时就阅读《向导》等革命书刊，并于1927年加入中国共产党。1929年夏，沙汀与谢荣华、刘丕承、蒋世洵一行四人到达上海，11月与同乡萧崇素一起迁入横浜路德恩里13号，萧崇素住二楼前楼，沙汀住后楼。1931年4月，经老同学沙汀介绍，艾芜搬到德恩里13号，与沙汀毗邻而居，共同研究探讨小说。后面相邻的一排房子，住的是周启应（周扬）、周绍仪（周立波）等人。1932年，沙汀加入中国左翼作家联盟。1933年，沙汀搬至施高塔路四达里（今山阴路57号）。', '浦阳小学位于江浦路831弄内。浦阳小学在共青团领导下创办于1933年2月。校址先设在齐物浦路物华里16号I今江浦路831弄16号，现已拆除），初建时即分小学部和夜校部。1935年2月，团员李林（李肇嘉）出资将学校迁至梅村（今江浦路969弄）9、11号。浦阳小学从建校伊始便成立共青团支部，由沪东共青团区委直接领导，团支部书记是徐庶声。1936年1月，浦阳小学停办，浦阳小学的一批师生陆续走向抗日前线。','上海工部局华员总会难民收容所遗址共有两处，一处位于爱文义路（今北京西路）卿云小学内，另一处在卡德路（现石门二路）华美女中，分别为第一二五、一〇二难民收容所。该收容所是由当时爱国抗日团体“蚁社”与工部局华员总会、精武体育会合办的。“八一三”事变爆发后，“蚁社”成为职业界救亡协会的一个团体成员，工作重点也由革命斗争转移到为抗战服务，结合救济工作做教育和组织工作，发展进步势力。','闵行区烈士陵园位于临春路388号。在新民主主义革命时期和社会主义建设时期，阂行区先后有400多位本地籍和其他地区的革命烈士牺牲在这里，为纪念先烈，1949年秋在北桥黄家塘建造上海烈士公墓。1962年，在北桥农场苗圃重建上海县烈士墓，后更名为“闵行区烈士陵园”。整个陵园占地2万多平方米，自东向西依次为祭扫广场、革命烈士事迹陈列馆和烈士墓区。祭扫广场西侧矗立着一座汉白玉纪念碑，正面镌刻着毛泽东题词“革命烈士永垂不朽”。烈士墓区呈梯田状，埋葬着抗日战争、解放战争等时期壮烈牺牲的183位革命烈士的忠骨。2009年，被上海市人民政府公布为上海市爱国主义教育基地。','西门书店原位于中华路1420号（今中华路盐城路路口），前身是一家米店。1926年，创造社出版部及《洪水》编辑部被搜查。《洪水》编辑部主编周全平离开创造社，继续从事文化事业。1929年，他租赁老西门市口的一家米店，联合谢澹如、徐耘阡等，于10月创办西门书店。书店主要经营新文学、社会科学等书刊，设有新书推荐社和《出版月刊》编辑部。《出版月刊》经常译载外国左翼文化运动、革命书刊的目录、介绍、消息等，深受读者欢迎。1930年夏，西门书店被反动当局注意，被迫歇业。原址已拆除。',
                        '黄金大戏院暨1939年中共地下党领导的上海市职业界联合义卖公演处遗址位于金陵中路1号。1938年，公共租界和法租界沦为“孤岛”，但话剧界职业剧团等文艺界人士仍坚持抗战活动。1939年7月24日起，话剧界人士在黄金大戏院举行联合义演，演出对外名义是“业余话剧界慈善公演”。演出得到上海文委的协助，旨在动员社会各界救济难民，并借以支援新四军。公演规模空前，取得极大的成功，不仅筹集到一笔数目十分可观的款项，还达到救济难民和为新四军捐款的目的。该建筑在1993年市政建设中被拆除。', '冯雪峰是中国共产党在1930年至1933年间左翼文化战线的重要领导人之一，先后担任“左联”党团书记、中共上海中央局文委书记、中共江苏省委宣传部部长之职。1928年初，冯雪峰来到上海，一面寻找党，一面从事翻译工作。这一时期，他住在北四川路景云里（今横浜路35弄）11号。1928年11月，经柔石介绍，冯雪峰开始与鲁迅交往，成为鲁迅后期战斗生活中的忠实学生和亲密战友。旧居建筑尚存，现为民居。','鼎元钱庄位于四川中路靠近滇池路路口，它是中共地下党的秘密钱庄。抗战胜利后，中共华中局财经委员会准备在大城市开办一批工商企业，鼎元钱庄是其中之一。1947年3月，鼎元钱庄在上海四川路靠近滇池路路口设立，并正式开始营业。鼎元钱庄取得合法营业资格，通过精心经营，扩大资金来源，尽力地支持中共地下党开办公司，并采购各项军用物资，送往解放区。此外，党在香港等地开展文化活动，鼎元钱庄也给予支持。1949年5月25日，中国人民解放军进驻上海，鼎元钱庄的使命胜利完成。','荣家老宅位于陕西北路186号。荣家老宅为荣氏家族在上海的早期寓所。荣氏家族中的荣宗敬、荣德生兄弟是近代著名实业家，被誉为“民族工业的先驱”。上海解放前夕，荣德生全力阻止迁厂逃资，终于使企业的绝大部分机器设备得到完好的保存，为中华人民共和国留下了一大笔宝贵的社会财富。荣家老宅是一幢带花园的独立式洋房，采用折中主义风格。2014年，公布为上海市文物保护单位。','孙中山旧居位于环龙路63号（今南昌路59号）。1915年10月25日，孙中山与宋庆龄在日本结婚。第二年，两人自日本回到上海，曾租住在此。孙中山在此写成《会议通则》等重要著作。1917年7月1日，张勋复辟。孙中山于当晚接见国会议员商谈讨伐事宜。1917年，孙中山接待北京黎元洪特派代表商佐冈中将，并接受所授大元帅勋位，在这里举行隆重的仪式。如今，原址已是科学会堂所在地。','“棚户民校”由中共领导的上海市实验民众学校师生于1947年建立，地址位于余姚路487弄19号。棚户区是近代上海城市贫民聚居地区，那里的居民生活贫苦，受尽歧视，生活环境脏乱，子女受教育程度低。“棚户民校”的建立正是中共改善棚户区环境的一次尝试。棚户区居民可以在民校中接受教育，了解革命真理。除此之外，实验民校师生还为生活在那里的居民放电影、通阴沟、埋下水道、填臭水浜、接电源、装路灯，建立福利站、医疗队、缝纫组、消防队，领导居民与流氓恶霸进行斗争，深受居民爱戴和拥护。现该校建筑已不存在，原址现为余姚路第二幼儿园。',
                        '中共明华坊印刷厂位于汇山路明华坊43、45号（今霍山路保定路路口东南侧），这是两幢相连的石库门房屋，由中共中央上海局和中共江苏省委合办。1934年春，由毛远耀出面租借45号房屋作为上海第七印刷厂厂址，43号则由张合出面租借作为货栈，替印刷厂作掩护。印刷厂所需的材料、机器等都装箱运到货栈，拆开后到夜深人静时再送到印刷厂。印好的书籍、宣传品也采用同样的方法递送到隔壁货栈，装箱运出。厂内由7人组成，有4开铅印机一部，印刷马列主义书籍和《捷报》等宣传品。', '中国农工民主党驻沪秘密办事处旧址位于陶尔斐司路68号（今南昌路56号）。1947年2月，中华民族解放行动委员会在上海召开第四次全国干部会议，党名改为中国农工民主党。会后，陆续建立省、市、地区组织。1947年10月，国民党政府宣布中国民主同盟为“非法组织”。11月，农工党中央被迫迁往香港，部分负责人留沪设立中央驻沪办事处，由丘哲任主任，办事处设在此处，党的活动转入秘密状态。1948年2月，驻沪办事处改组为华东局委员会，领导华东地区的工作。','瞿白音旧居位于霞飞路（今淮海中路）689号。瞿白音，著名戏剧、电影艺术家。1933年，瞿白音入住霞飞路（今淮海中路）689号，并把三楼的一大间作为业余剧社的单身宿舍。二楼的大间则由他介绍租给赵丹和叶露茜夫妇，后面小间住的是单身的袁牧之。其他的影剧界人士都以朋友身份，络绎不绝地在霞飞路689号出入，这里俨然成为当时上海进步剧人的大本营。','陆凤翔旧居位于朱家角镇胜利街239弄胜利新村内。在北伐战争期间，陆凤翔发动民众减租减息，完成扩军任务。“九一八”事变时，陆凤翔参加赴南京的学生请愿团，要求国民政府抗日。后受胡绳等人的影响，参与创办社会科学研究会，宣传马克思主义，并于1936年加入共产党。抗日战争爆发后，陆凤翔积极组织抗日武装，曾任八路军第一二九师抗日游击第三大队大队长、武乡县委书记、晋城县委书记等职。1958年8月因飞机失事遇难，后经江苏省人民委员会追认为革命烈士。'
                    ]

function addClickHandler(content, marker, options, ind) {
        marker.addEventListener("click", function (e) { //监听单击事件
            openInfo(content, e, options, ind)
        }
    );
    
}

function openInfo(content, e, options, ind) {
    var p = e.target;
    var point = new BMapGL.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMapGL.InfoWindow(content, options);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //开启信息窗口

}

var dist = new BMapGL.DistrictLayer({
    name: '(上海市)',
    fillColor: '#96adf1',
    fillOpacity: 0.25
});
map.addDistrictLayer(dist);

for (var i = 0; i < mapPoints.length; i++) {
    var points = new BMapGL.Point(mapPoints[i].y, mapPoints[i].x)
    var markers = new BMapGL.Marker(points);
    map.addOverlay(markers); //在地图上标记

    var opts = {
        position: points,
        width: 400,
        height: 300,
        title: info_buildingName[i]//配置info box
    }
    addClickHandler(info_description[i],markers,opts, i); //设置在点击时打开
}
