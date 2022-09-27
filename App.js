import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./pages/List";
import { wrap } from "lodash";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    subJudul: {
      judul1: "Definisi",
      judul2: "Etiologi",
      judul3: "Manifestasi Klinis",
    },
  },
  {
    id: "2",
    subJudul: {
      judul1: "Definisi",
      judul2: "Etiologi",
      judul3: "Manifestasi Klinis",
    },
  },
  {
    id: "3",
    subJudul: {
      judul1: "Definisi",
      judul2: "Etiologi",
      judul3: "Manifestasi Klinis",
    },
  },
  {
    id: "4",
    subJudul: {
      judul1: "Definisi",
      judul2: "Etiologi",
      judul3: "Jenis - Jenis Batu Ginjal",
    },
  },
  {
    id: "5",
    subJudul: {
      judul1: "Definisi",
      judul2: "Pielonefritis Akut",
      judul3: "Pielonefritis Kronis",
      judul4: "Etiologi Pielonefritis",
      judul5: "Manifestasi Klinis Pielonefritis",
    },
  },
];

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
  },
  contentWrapper: {
    backgroundColor: "#547d2e",
    paddingBottom: 60,
    paddingHorizontal: 10,
    height: Dimensions.get("window").height,
  },
  subJudul: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  materi: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  wrapperList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: "center",
  },
  orderList: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 10,
  },
  itemList: {
    color: "#fff",
    fontSize: 15,
  },
  triangle: {
    marginRight: 2,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFF",
    transform: [{ rotate: "90deg" }],
    marginLeft: 4,
  },
  subList: {
    marginLeft: 30,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: "center",
  },
  subSubList: {
    marginLeft: 55,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  },
  containerWelcomePage: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 150,
    backgroundColor: "#547d2e",
    height: Dimensions.get("window").height,
  },
  Mallted: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 40,
    color: "#fff",
  },
  male: {
    textAlign: "center",
    marginBottom: 80,
    color: "#fff",
  },
  nama: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  nim: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  btnStart: {
    width: 30,
  },
  subListButton: {
    elevation: 8,
    backgroundColor: "#547d2e",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
});

function DefinisiSindromNefrotik() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Definisi</Text>
      <Text style={styles.materi}>
        Sindrom nefrotik merupakan suatu penyakit ginjal yang terbanyak pada
        anak. Penyakit tersebut ditandai dengan sindrom klinik yang terdiri dari
        beberapa gejala yaitu proteinuria masif (>40 mg/m2 LPB/jam atau rasio
        protein/kreatinin pada urin sewaktu >2 mg/mg atau dipstick ≥ 2+),
        hipoalbuminemia ≤ 2,5 g/dL, edema, dan hiperkolesterolemia.
      </Text>
    </View>
  );
}

function EtiologiSindromNefrotik() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Etiologi</Text>
        <Text style={styles.materi}>1). Kongenital</Text>
        <Text style={styles.materi}>
          Penyebab dari sindrom nefrotik kongenital atau genetik adalah11 : -
          Finnish-type congenital nephrotic syndrome (NPHS1, nephrin) -
          Denys-Drash syndrome (WT1) - Frasier syndrome (WT1) - Diffuse
          mesangial sclerosis (WT1, PLCE1) - Autosomal recessive, familial FSGS
          (NPHS2, podocin) - Autosomal dominant, familial FSGS (ACTN4,
          α-actinin-4; TRPC6) - Nail-patella syndrome (LMX1B) - Pierson syndrome
          (LAMB2) - Schimke immuno-osseous dysplasia (SMARCAL1) 8 -
          Galloway-Mowat syndrome - Oculocerebrorenal (Lowe) syndrome
        </Text>
        <Text style={{ marginTop: 20, color: "#fff", fontSize: 15 }}>
          2). Primer
        </Text>
        <Text style={styles.materi}>
          Berdasarkan gambaran patologi anatomi, sindrom nefrotik primer atau
          idiopatik adalah sebagai berikut : - Sindrom Nefrotik Kelainan Minimal
          (SNKM) - Glomerulosklerosis fokal segmental (GSFS) - Mesangial
          Proliferative Difuse (MPD) - Glomerulonefritis Membranoproliferatif
          (GNMP) - Nefropati Membranosa (GNM)
        </Text>
        <Text style={{ marginTop: 20, color: "#fff", fontSize: 15 }}>
          3). Sekunder
        </Text>
        <Text style={styles.materi}>
          Sindrom nefrotik sekunder mengikuti penyakit sistemik, antara lain
          sebagai berikut : - lupus erimatosus sistemik (LES) - keganasan,
          seperti limfoma dan leukemia - vaskulitis, seperti granulomatosis
          Wegener (granulomatosis dengan poliangitis), sindrom Churg-Strauss
          (granulomatosis eosinofilik dengan poliangitis), poliartritis nodosa,
          poliangitis mikroskopik, purpura Henoch Schonlein - Immune complex
          mediated, seperti post streptococcal (postinfectious)
          glomerulonephritis
        </Text>
      </ScrollView>
    </View>
  );
}

function ManifestastiKlinisSindromNefrotik() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Manifestasi Klinis</Text>
        <Text style={{ color: "#fff", fontSize: 15 }}>1). Proteinuria </Text>
        <Text style={styles.materi}>
          Protenuria merupakan kelainan utama pada sindrom nefrotik. Apabila
          ekskresi protein ≥ 40 mg/jam/m2 luas permukaan badan disebut dengan
          protenuria berat. Hal ini digunakan untuk membedakan dengan protenuria
          pada pasien bukan sindrom nefrotik.
        </Text>
        <Text style={{ marginTop: 20, color: "#fff", fontSize: 15 }}>
          2). Hipoalbuminemia{" "}
        </Text>
        <Text style={styles.materi}>
          Salah satu manifestasi pada pasien sindrom nefrotik pada anak terjadi
          hipoalbuminemia apabila kadar albumin kurang dari 2,5 g/dL.
        </Text>
        <Text style={{ marginTop: 20, color: "#fff", fontSize: 15 }}>
          3). Edema{" "}
        </Text>
        <Text style={styles.materi}>
          Terdapat beberapa teori yang menjelaskan tentang timbulnya edema pada
          sindrom nefrotik. Underfilled theory merupakan teori klasik tentang
          pembentukan edema. Teori ini berisi bahwa adanya edema disebabkan oleh
          menurunnya tekanan onkotik intravaskuler dan menyebabkan cairan
          merembes ke ruang interstisial.
        </Text>
        <Text style={{ marginTop: 20, color: "#fff", fontSize: 15 }}>
          4). Hiperkolesterolemia
        </Text>
        <Text style={styles.materi}>
          Hampir semua kadar lemak (kolesterol, trigliserid) dan lipoprotein
          serum meningkat pada sindrom nefrosis. Hal ini dapat dijelaskan dengan
          penjelasan antara lain yaitu adanya kondisi hipoproteinemia yang
          merangsang sintesis protein menyeluruh dalam hati, termasuk
          lipoprotein. Selain itu katabolisme lemak menurun karena terdapat
          penurunan kadar lipoprotein lipase plasma, sistem enzim utama yang
          mengambil lemak dari plasma
        </Text>
      </ScrollView>
    </View>
  );
}

function DefinisiGlomerulonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Definisi</Text>
      <Text style={styles.materi}>
        Glomerulo Nefritis adalah gangguan pada ginjal yang ditandai dengan
        peradangan pada kapiler glomerulus yang fungsinya sebagai filtrasi
        cairan tubuh dan sisa-sisa pembuangan (Suriadi, dkk, 2001). Menurut
        Ngastiyah (2005) GNA adalah suatu reaksi imunologis ginjal terhadap
        bakteri / virus tertentu.GNA adalah istilah yang secara luas digunakan
        yang mengacu pada sekelompok penyakit ginjal dimana inflamasi terjadi di
        glomerulus (Brunner & Suddarth, 2001)
      </Text>
    </View>
  );
}

function EtiologiGlomerulonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Etiologi</Text>
      <Text style={styles.materi}>
        Penyebab GNA adalah bakteri, virus, dan proses imunologis lainnya,
        tetapi pada anak penyebab paling sering adalah pasca infeksi
        streptococcus β haemolyticus; sehingga seringkali di dalam pembicaraan
        GNA pada anak yang dimaksud adalah GNA pasca streptokokus (Noer, 2002).
        Glomerulonefritis akut paska streptokokus menyerang anak umur 5 – 15
        tahun, anak laki – laki berpeluang menderita 2 kali lebih sering
        dibanding anak perempuan, timbul setelah 9 – 11 hari awitan infeksi
        streptokokus (Nelson, 2002).
      </Text>
    </View>
  );
}

function ManifestastiGlomerulonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Manifestasi Klinis</Text>
        <Text style={styles.materi}>
          Kasus klasik atau tipikal diawali dengan infeksi saluran napas atas
          dengan nyeri tenggorok dua minggu mendahului timbulnya sembab (Travis,
          1994).Periode laten rata-rata 10 atau 21 hari setelah infeksi
          tenggorok atau kulit (Nelson, 2000).
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.materi}>
          1) Hematuria (urine berwarna merah kecoklat-coklatan)
        </Text>
        <Text style={styles.materi}>2) Proteinuria (protein dalam urine)</Text>
        <Text style={styles.materi}>
          3) Oliguria (keluaran urine berkurang)
        </Text>
        <Text style={styles.materi}>4) Nyeri panggul</Text>
        <Text style={styles.materi}>
          5) Edema, ini cenderung lebih nyata pada wajah dipagi hari, kemudian
          menyebar ke abdomen dan ekstremitas di siang hari (edema sedang
          mungkin tidak terlihat oleh seorang yang tidak mengenal anak dengan
          baik).
        </Text>
        <Text style={styles.materi}>
          6) Suhu badan umumnya tidak seberapa tinggi, tetapi dapat terjadi
          tinggi sekali pada hari pertama
        </Text>
        <Text style={styles.materi}>
          7) Hipertensi terdapat pada 60-70 % anak dengan GNA pada hari pertama
          dan akan kembali normal pada akhir minggu pertama juga. Namun jika
          terdapat kerusakan jaringan ginjal, tekanan darah akan tetap tinggi
          selama beberapa minggu dan menjadi permanen jika keadaan penyakitnya
          menjadi kronik (Sekarwana, 2001).
        </Text>
        <Text style={styles.materi}>
          8) Dapat timbul gejala gastrointestinal seperti muntah, tidak nafsu
          makan, dan diare.
        </Text>
        <Text style={styles.materi}>
          9) Bila terdapat ensefalopati hipertensif dapat timbul sakit kepala,
          kejang dan kesadaran menurun.
        </Text>
        <Text style={styles.materi}>
          10) Fatigue (keletihan atau kelelahan)
        </Text>
      </ScrollView>
    </View>
  );
}

function DefinisiHidronefrosis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Definisi</Text>
      <Text style={styles.materi}>
        Hidronefrosis adalah dilatasi piala dan perifer ginjal pada satu atau
        kedua ginjal akibatadanya obstruksi pada aliran normal urin menyebabkan
        urin mengalir balik sehingga tekanandiginjal meningkat.Hidronefrosis
        adalah obstruksi aliran kemih proksimal terhadap kandung kemih
        dapatmengakibatkan penimbunan cairan bertekanan dalam pelviks ginjal dan
        ureter yang dapatmengakibatkan absorbsi hebat pada parenkim
        ginjal.Apabila obstruksi ini terjadi di ureter atau kandung kemih,
        tekanan balik akan mempengaruhikedua ginjal tetapi jika obstruksi
        terjadi disalah satu ureter akibat adanya batu atau kekakuanmaka hanya
        satu ginjal yang rusak
      </Text>
    </View>
  );
}

function EtiologiHidronefrosis() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Etiologi</Text>
        <Text style={styles.materi}>
          Hidronefrosis biasanya terjadi akibat adanya sumbatan pada sambungan
          ureteropelvik(sambungan antara ureter dan pelvis renalis):
        </Text>
        <Text style={styles.materi}>
          1) Kelainan struktural, misalnya jika masuknya ureter ke dalam pelvis
          renalis terlalutinggi
        </Text>
        <Text style={styles.materi}>
          2) Lilitan pada sambungan ureteropelvik akibat ginjal bergeser ke
          bawah
        </Text>
        <Text style={styles.materi}>
          3) Batu di dalam pelvis renalisd. Penekanan pada ureter oleh:-jaringan
          fibrosa- arteri atau vena yang letaknya abnormal- tumor.Hidronefrosis
          juga bisa terjadi akibat adanya penyumbatan dibawah sambungan
          ureteropelvikatau karena arus balik air kemih dari kandung kemih:a
          Batu di dalam ureter b. Tumor di dalam atau di dekat ureterc.
          Penyempitan ureter akibat cacat bawaan, cedera, infeksi, terapi
          penyinaran atau pembedahan
        </Text>
        <Text style={styles.materi}>
          4) Kelainan pada otot atau saraf di kandung kemih atau uretere.
          Pembentukan jaringan fibrosa di dalam atau di sekeliling ureter akibat
          pembedahan,rontgen atau obat-obatan (terutama metisergid)
        </Text>
        <Text style={styles.materi}>
          5) Ureterokel (penonjolan ujung bawah ureter ke dalam kandung kemih)
        </Text>
        <Text style={styles.materi}>
          6) Kanker kandung kemih, leher rahim, rahim, prostat atau organ
          panggul lain. Sumbatan yang menghalangi aliran air kemih dari kandung
          kemih ke uretra akibat pembesaran prostat, peradangan atau kankeri.
          Arus balik air kemih dari kandung kemih akibat cacat bawaan atau
          cedera
        </Text>
        <Text style={styles.materi}>
          7) Infeksi saluran kemih yang berat, yang untuk sementara waktu
          menghalangi kontraksiureter.Kadang hidronefrosis terjadi selama
          kehamilan karena pembesaran rahim menekan ureter.Perubahan hormonal
          akan memperburuk keadaan ini karena mengurangi kontraksi ureteryang
          secara normal mengalirkan air kemih ke kandung kemih.Hidronefrosis
          akan berakhir bila kehamilan berakhir, meskipun sesudahnya pelvis
          renalis danureter mungkin tetap agak melebar.Pelebaran pelvis renalis
          yang berlangsung lama dapat menghalangi kontraksi otot ritmis
          yangsecara normal mengalirkan air kemih ke kandung kemih. Jaringan
          fibrosa lalu akanmenggantikan kedudukan jaringan otot yang normal di
          dinding ureter sehingga terjadikerusakan yang menetap
        </Text>
      </ScrollView>
    </View>
  );
}

function ManifestastiHidronefrosis() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Manifestasi Klinis</Text>
        <Text style={styles.materi}>
          Pasien mungkin asimtomatik jika awitan terjadi secara bertahap.
          Obstruksi akutdapatmenimbulkan rasa sakit dipanggul dan pinggang. Jika
          terjadi infeksi maja disuria,menggigil,demam dan nyeri tekan serta
          piuria akan terjadi. Hematuri dan piuriamungkin juga ada. Jikakedua
          ginjal kena maka tanda dan gejala gagal ginjal kronik akan muncul,
          seperti:
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.materi}>
          1) Hipertensi (akibat retensi cairan dan natrium).
        </Text>
        <Text style={styles.materi}>2) Gagal jantung kongestif.</Text>
        <Text style={styles.materi}>
          3) Perikarditis (akibat iritasi oleh toksik uremi).
        </Text>
        <Text style={styles.materi}>4) Pruritis (gatal kulit).</Text>
        <Text style={styles.materi}>
          5) Butiran uremik (kristal urea pada kulit).
        </Text>
        <Text style={styles.materi}>6) Anoreksia, mual, muntah, cegukan.</Text>
        <Text style={styles.materi}>
          7) Penurunan konsentrasi, kedutan otot dan kejang.
        </Text>
        <Text style={styles.materi}>8) Amenore, atrofi testikuler</Text>
      </ScrollView>
    </View>
  );
}

function DefinisiBatuGinjal() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Definisi</Text>
        <Text style={styles.materi}>
          Batu ginjal atau nefrolitiasis merupakan suatu keadaan dimana terdapat
          satu atau lebih batu di dalam pelvis atau kaliks dari ginjal. Secara
          garis besar pembentukan batu ginjal dipengaruhi oleh faktor intrinsik
          dan ekstrinsik. Faktor intrinsik yaitu umur, jenis kelamin, dan
          keturunan sedangkan faktor ekstrinsik yaitu kondisi geografis, iklim,
          kebiasaan makan, zat yang terkandung dalam urin, pekerjaan, dan
          sebagainya (Mochammad, 2014). Komposisi utama dari batu ginjal adalah
          kalsium okslat yang mencapai 80% (Worcester et al., 2008).
          Nefrolitiasis berdasarkan komposisinya terbagi menjadi batu kalsium,
          batu struvit, batu asam urat, batu sistin, batu xantin, batu
          triamteren, dan batu silikat. Pembentukan batu ginjal umumnya
          membutuhkan keadaan supesaturasi. Namun pada urin normal, ditemukan
          adanya zat inhibitor pembentuk batu. Pada kondisi-kondisi tertentu,
          terdapat zat reaktan yang dapat menginduksi pembentukan batu. Adanya
          hambatan aliran urin, kelainan bawaan pada pelvikalises, hiperplasia
          prostat benigna, striktura, dan buli buluneurogenik ikut berperan
          dalam proses pembentukan batu (Mochammad, 2014).
        </Text>
      </ScrollView>
    </View>
  );
}

function EtiologiBatuGinjal() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Etiologi</Text>
        <Text style={styles.materi}>
          Ada beberapa penyebab terbentuknya batu ginjal yaitu hiperkalsiuria,
          hiperurikosuria, hipositraturia, dan hiperoksaluria (Sakhaee et al.,
          2012). Hal tersebut dapat dipicu oleh berbagai macam faktor seperti
          faktor keturunan, makanan, dan obat-obatan.
        </Text>
        <Text style={styles.materi}>
          1) Hiperkalsiuria: merupakan penyebab pembentukan batu kalsium.
          Hiperkalsiuria disebabkan peningkatan penyerapan kalsium usus,
          menurunnya reabsorbsi kalsium di ginjal dan peningkatan mobilisasi
          kalsium dari tulang. Hiperkalsiuria juga merupakan gangguan heterogen
          pada hiperabsorbsi kalsium usus dependen atau independen dari
          1,25-dihydroxyvitamin D [1,25(𝑂𝐻)2𝐷]. Peningkatan konsentrasi serum
          1,25(OH)2D-dependent mengakibatkan terbentuknya batu ginjal akibat
          hiperkalsiuria (Sakhaee et al., 2012).
        </Text>
        <Text style={styles.materi}>
          2) Hiperurikosuria terdeteksi dari 10% pembentuk batu kalsium.
          Berdasarkan fisikokimia batu kalsium terbentuk akibat supersaturasi
          kemih dengan monosodium koloid kristalisasi kalsium oksalat yang
          diinduksi oleh urat (Sakhaee et al., 2012).
        </Text>
        <Text style={styles.materi}>
          3) Hipositraturia: Sitrat merupakan inhibitor endogen pembentukan batu
          kalsium. Rendahnya ekskresi sitrat urin ditemukan pada 20-60%
          nefrolitiasis. Penentu utama ekskresi sitrat urin adalah keseimbangan
          asam basa. Hipositraturia umumnya terjadi dengan asidosis metabolik.
          Peran penghambatan sitrat juga melibatkan pembentukan larutan kompleks
          dan pengurangan kejenuhan (Sakhaee et al., 2012).
        </Text>
        <Text style={styles.materi}>
          4) Hiperoksaluria: Oksalat dan kalsium dapat meningkatkan
          supersaturasi kalsium oksalat pada kemih. Hiperoksaluria merupakan
          10-50% pembentuk batu kalsium. Hiperoksaluria disebabkan oleh produksi
          oksalat yang berlebih akibat dari gangguan metabolisme, peningkatan
          penyerapan oksalat usus, peningkatan asupan makanan dan
          bioavailabilitas, dan urin pH. Urin yang sangat asam (pH 5,5) dan urin
          yang sangat basa (pH 6,7) dapat mempengaruhi pembentukan batu kalsium.
          Dengan pH yang terlalu asam maka urin menjadi jenuh dengan asam urat
          yang berperan dalam kristalisasi kalsium oksalat. Sedangkan urin yang
          sangat alkalin dapat meningkatkan monohidrogen fosfat yang dalam
          kombinasi dengan kalsium berubah menjadi termodinamika brusit yang
          tidak stabil dan akhirnya terbentuk hidroksiapatit (Sakhaee et al.,
          2012).
        </Text>
      </ScrollView>
    </View>
  );
}

function JenisBatuGinjal() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Jenis - Jenis</Text>
        <Text style={styles.materi}>
          Batu ginjal mempunyai banyak jenis dengan kandungan yang berbeda-beda,
          berdasarkan komposisinya batu ginjal dibedakan sebagai berikut :
        </Text>
        <Text style={styles.materi}>
          1) Batu kalsium terdiri dari batu kalsium oksalat dan kalsium fosfat.
          Batu kalsium merupakan jenis batu ginjal yang paling umum. Batu
          kalsium oksalat disebabkan oleh terlalu banyak oksalat dalam urin atau
          disebut hiperkalsiuria. Oksalat adalah zat alami yang ditemukan dalam
          banyak makanan. Tubuh menggunakan makanan untuk energi. Setelah tubuh
          menggunakan apa yang dibutuhkannya, produk-produk limbah keluar
          melalui aliran darah ke ginjal dan dibuang melalui urin. Urin memiliki
          berbagai limbah di dalamnya. Jika terlalu banyak limbah dalam cairan
          yang terlalu sedikit, kristal dapat mulai terbentuk. Kristal-kristal
          ini dapat saling menempel ke kalsium ketika urin diproduksi oleh
          ginjal dan membentuk massa padat yaitu batu ginjal (A to Z Health
          Guide, 2017).
        </Text>
        <Text style={styles.materi}>
          2) Batu asam urat tidak berkaitan dengan hiperurokosuria tetapi karena
          penurunan kelarutan asam urat karena pH urin yang rendah. Batu asam
          urat merupakan sindrom metabolik akibat urin bersifat asam yang terus
          menerus. Kelarutan asam urat tidak terdisosiasi hanya 90 mg/L, dan
          pada pH dibawah pKa 5,35 lebih dari setengah asam urat yang ada akan
          berada dalam bentuk yang tidak berdisosiasi, sehingga ekskresi asam
          urat harian normal sebanyak 500 mg tidak dapat disimpan dalam larutan
          dengan volume urin dibawah 3 L (Worcester et al., 2008).
        </Text>
        <Text style={styles.materi}>
          3) Batu struvit merupakan campuran magnesium, amonium fosfat dan
          apatit karbonat yang terbentuk ketika saluran kemih terinfeksi
          mikroorganisme yang memiliki enzim urease seperti golongan proteus,
          providencia, klebsiella, pseudomnas dan enterococci. Urease
          menghidrolisis menjadi amonia dan CO2 lalu meningkatkan pH urin dan
          mengarah pada pembentukan karbonat. Kalsium karbonat mengendap dengan
          struvit, membentuk batu bercabang besar didalam sistem pengumpulan
          yang melekat pada bakteri. Antibiotik tidak efektif dalam memberantas
          infeksi ketika bahan batu ada dan selama ada infeksi, batu akan terus
          berkembang (Worcester et al., 2008).
        </Text>
        <Text style={styles.materi}>
          4) Batu sistin ditemukan pada pasien dengan kelainan bawaan pada
          transportasi asam amino pada ginjal dan usus yang menyebabkan
          peningkatan ekskresi lisin, ornithin, sistin dan arginin karena
          gangguan reabsorbsi di nefron. Batu terbentuk karena terbatasnya
          kelarutan sistin. Kelarutan sistin lebih tinggi dalam urin alkali,
          berkisar 175-360 mg/L di urin pada pH lebih dari 7,0. Tujuan menjaga
          konsentrasi sistin sibawah 240 mg/L pada pH urin 7,0 untuk menjaga
          kelarutan. Asupan cairan yang tinggi diberikan berdasarkan ekskresi
          sistin harian yang dikeahui (Worcester et al., 2008)
        </Text>
      </ScrollView>
    </View>
  );
}

function DefinisiPielonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Definisi</Text>
      <Text style={styles.materi}>
        Pielonefritis merupakan infeksi bakteri yang menyerang ginjal, yang
        sifatnya akut maupun kronis. Pielonefritis akut biasanya akan
        berlangsung selama 1 sampai 2 minggu. Bila pengobatan pada pielonefritis
        akut tidak sukses maka dapat menimbulkan gejala lanjut yang disebut
        dengan pielonefritis kronis. Pielonefritis meurpakan infeksi bakteri
        pada piala ginjal,tumulus dan jaringan interstinal dari salah satu atau
        kedua ginjal.
      </Text>
    </View>
  );
}

function PielonefritisAkut() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Pielonefritis Akut</Text>
      <Text style={styles.materi}>
        Pielonefritis akut biasanya singkat dan sering terjadi infeksi berulang
        karena terapi tidak sempurna atau infeksi baru. Dimana 20% dari infeksi
        yang berulang terjadi dua minggu setelah terapi selesai. Infeksi bakteri
        dari saluran kemih bagian bawah kea rah ginjal, hal ini akan
        mempengaruhi fungsi ginjal. Infeksi saluran urinarius atas dikaitkan
        dengan selimut antibiotic bakteri dalam urin. Ginjal biasanya membesar
        disertai infiltrasi interstisial sel-sel inflamasi. Abses dapat dijumpai
        pada kapsul ginjal dan pada taut kortikomedularis. Pada akhirnya, atrofi
        dan kerusakan tubulus serta glomerulus terjadi (indra,2011).
      </Text>
    </View>
  );
}

function PielonefritisKronis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Pielonefritis Kronis</Text>
      <Text style={styles.materi}>
        Pielonefritis kronis juga berasal dari adanya bakteri, tetapi dapat juga
        karena faktor lain seperti obstruksi saluran kemih dana refluk urin.
        Pielonefritis kronis dapat merusak jaringan ginjal secara permanen
        akibat inflamasi yang berulang kali dan timbulnya parut dan dapat
        menyebabkan terjadinya renal failure (gagal ginjal) yang kronis. Ginjal
        pun membentuk jaringan parut progresif, berkontraksi dan tidak
        berfungsi. Proses perkembangan kegagalan ginjal kronis dari infeksi
        ginjal yang berulang-ulang berlangsung beberapa tahun atau setelah
        infeksi yang gawat.
      </Text>
    </View>
  );
}

function EtiologiPielonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Etiologi</Text>
      <Text style={styles.materi}>
        Escherichia coli (bakteri yang dalam keadaan normal ditemukan di usus
        besar) merupakan penyebab dari 90% infeksi ginjal diluar rumah sakit dan
        penyebab dari 50% infeksi ginjal di rumah sakit. Selain E.coli bakteri
        lain yang juga turut dapat mengakibatkan pielonefritis seperti
        klebsiella, golongan streptokokus. Infeksi biasanya berasal dari daerah
        kelamin yang naik ke kandung kemih. Pada salurah kemih yang sehat,
        naiknya infeksi ini biasanya bisa dicegah oleh aliran air kemih yang
        akan membersihkan organism oleh penutupan ureter di tempat masuknya ke
        kandung kemih. Berbagai penyumbatan fisik pada aliran air kemih
        (misalnya batu ginjal atau pembesaran prostat) atau arus balik air kemih
        dari kandung kemih ke dalam ureter, akan meningkatkan kemungkinan
        terjadinya infeksi ginjal. Infeksi juga bisa dibawa ke ginjal dari
        bagian tubuh lainnya melalui aliran darah. keadaan lainnya yang
        meningkatkan risiko terjadinya ginjal adalah :
      </Text>
      <Text style={styles.materi}>1) Kehamilan</Text>
      <Text style={styles.materi}>2) Kencing Manis</Text>
      <Text style={styles.materi}>
        3) Keadaan-keadaan yang menyebabkan menurunnya sistem kekebalan tubuh
        untuk melawan infeksi
      </Text>
    </View>
  );
}

function ManifestasiPielonefritis() {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView>
        <Text style={styles.title}>Manifestasi Klinis</Text>
        <Text style={styles.materi}>
          Gejala pada pasien dengan pielonefritis biasanya timbul secara
          tiba-tiba berupa demam, menggigil, nyeri di punggung bagian bawah,
          mual dan muntah. Selain itu, beberapa penderita menunjukkan gejala
          infeksi saluran kemih bagian bawah biasanya sering berkemih dan nyeri
          ketika berkemih. Biasanya terjadi pembesaran salah satu atau kedua
          ginjal. Kadang otot perut berkontraksi kuat. Bisa terjadi kolik
          renalis, dimana penderita merasakan nyeri hebat yang disebabkan oleh
          kejang ureter. Kejang bisa terjadi karena adanya iritasi akibat
          infeksi atau karena lewatnya batu ginjal. Pada anak-anak, gejala
          infeksi ginjal seringkali sangat ringan dan lebih sulit untuk
          dikenali. Pada infeksi menahun (pielonefritis kronis), nyerinya
          bersifat samar dan demam hilang timbul atau tidak ditemukan demam sama
          sekali. Pielonefritis kronis hanya terjadi pada penderita yang
          memiliki kelainan utama, seperti penyumbatan saluran kemih, batu
          ginjal yang besar atau arus balik air kemih dari kandung kemih ke
          dalam ureter (pada anak kecil). Pielonefritis kronis pada akhirnya
          bisa merusak ginjal sehingga ginjal tidak dapat berfungsi sebagaimana
          mestinya (gagal ginjal). Berikut tanda dan gejala pielonefritis akut
          dan kronis
        </Text>
        <Text style={styles.materi}>1) Pielonefritis akut</Text>
        <View style={styles.subList}>
          <Text style={styles.materi}>a) Demam</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>b) Menggigil</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>c) Nyeri panggul</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>
            d) Nyeri tekan pada sudut kostovetebral (CVA)
          </Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>e) Lekositosis</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>
            f) Adanya bakteri dan sel darah putih pada urin
          </Text>
          <Text style={styles.materi}>g) Disuria</Text>
          <Text style={styles.materi}>
            h) Biasanya terjadi pembesaran ginjal disertai infiltrasi
            interstisial sel-sel inflamasi
          </Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>g) Disuria</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>
            h) Biasanya terjadi pembesaran ginjal disertai infiltrasi
            interstisial sel-sel inflamasi
          </Text>
        </View>
        <Text style={styles.materi}>2) Pielonefritis kronis</Text>
        <View style={styles.subList}>
          <Text style={styles.materi}>
            a) Tanpa gejala infeksi, kecuali terjadi eksaserbasi
          </Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>b) Keletihan</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>c) Sakit kepala</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>d) Nafsu makan rendah</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>e) Poliuria</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>f) Haus yang berlebihan</Text>
          <Text style={styles.materi}>g) Kehilangan berat badan</Text>
          <Text style={styles.materi}>
            h) Infeksi yang menetap menyebabkan jaringan parut di ginjal,
            disertai gagal ginjal pada akhirnya.
          </Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>g) Disuria</Text>
        </View>
        <View style={styles.subList}>
          <Text style={styles.materi}>
            h) Biasanya terjadi pembesaran ginjal disertai infiltrasi
            interstisial sel-sel inflamasi
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  if (itemId === DATA[0].id) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Definisi Sindrom Nefrotik")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[0].subJudul.judul1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Etiologi Sindrom Nefrotik")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[0].subJudul.judul2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Manifestasi Klinis Sindrom Nefrotik")
          }
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[0].subJudul.judul3}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (itemId === DATA[1].id) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Definisi Glomerulonefritis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[1].subJudul.judul1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Etiologi Glomerulonefritis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[1].subJudul.judul2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Manifestasi Klinis Glomerulonefritis")
          }
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[1].subJudul.judul3}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (itemId === DATA[2].id) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Definisi Hidronefrosis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[2].subJudul.judul1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Etiologi Hidronefrosis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[2].subJudul.judul2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Manifestasi Klinis Hidronefrosis")
          }
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[2].subJudul.judul3}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (itemId === DATA[3].id) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Definisi Batu Ginjal")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[3].subJudul.judul1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Etiologi Batu Ginjal")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[3].subJudul.judul2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Jenis - Jenis Batu Ginjal")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[3].subJudul.judul3}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (itemId === DATA[4].id) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Definisi Pielonefritis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[4].subJudul.judul1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Pielonefritis Akut")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[4].subJudul.judul2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Pielonefritis Kronis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[4].subJudul.judul3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Etiologi Pielonefritis")}
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[4].subJudul.judul4}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Manifestasi Klinis Pielonefritis")
          }
          style={styles.subListButton}
        >
          <Text style={styles.buttonText}>{DATA[4].subJudul.judul5}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.containerWelcomePage}>
      <Text style={styles.Mallted}>KISK</Text>
      <Text style={styles.male}>Kenali Infeksi Saluran Kemih</Text>
      <Text style={styles.nama}>Nanda Tiara</Text>
      <Text style={styles.nim}>1958011011</Text>
      <Button
        style={styles.btnStart}
        title="Mulai"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          options={{
            title: "KISK by Nanda Tiara",
            headerTitleStyle: {
              fontSize: 12,
            },
          }}
          component={Welcome}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: "KISK by Nanda Tiara",
            headerTitleStyle: {
              fontSize: 12,
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Definisi Sindrom Nefrotik"
          component={DefinisiSindromNefrotik}
        />
        <Stack.Screen
          name="Etiologi Sindrom Nefrotik"
          component={EtiologiSindromNefrotik}
        />
        <Stack.Screen
          name="Manifestasi Klinis Sindrom Nefrotik"
          component={ManifestastiKlinisSindromNefrotik}
        />

        <Stack.Screen
          name="Definisi Glomerulonefritis"
          component={DefinisiGlomerulonefritis}
        />
        <Stack.Screen
          name="Etiologi Glomerulonefritis"
          component={EtiologiGlomerulonefritis}
        />
        <Stack.Screen
          name="Manifestasi Klinis Glomerulonefritis"
          component={ManifestastiGlomerulonefritis}
        />

        <Stack.Screen
          name="Definisi Hidronefrosis"
          component={DefinisiHidronefrosis}
        />
        <Stack.Screen
          name="Etiologi Hidronefrosis"
          component={EtiologiHidronefrosis}
        />
        <Stack.Screen
          name="Manifestasi Klinis Hidronefrosis"
          component={ManifestastiHidronefrosis}
        />

        <Stack.Screen
          name="Definisi Batu Ginjal"
          component={DefinisiBatuGinjal}
        />
        <Stack.Screen
          name="Etiologi Batu Ginjal"
          component={EtiologiBatuGinjal}
        />
        <Stack.Screen
          name="Jenis - Jenis Batu Ginjal"
          component={JenisBatuGinjal}
        />

        <Stack.Screen
          name="Definisi Pielonefritis"
          component={DefinisiPielonefritis}
        />

        <Stack.Screen name="Pielonefritis Akut" component={PielonefritisAkut} />

        <Stack.Screen
          name="Pielonefritis Kronis"
          component={PielonefritisKronis}
        />

        <Stack.Screen
          name="Etiologi Pielonefritis"
          component={EtiologiPielonefritis}
        />

        <Stack.Screen
          name="Manifestasi Klinis Pielonefritis"
          component={ManifestasiPielonefritis}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
