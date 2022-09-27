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
];

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
  },
  contentWrapper: {
    backgroundColor: "#547d2e",
    padding: 10,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
