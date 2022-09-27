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
      <Text style={styles.title}>Etiologi</Text>
      <Text style={styles.materi}>1). Kongenital</Text>
      <Text style={styles.materi}>
        Penyebab dari sindrom nefrotik kongenital atau genetik adalah11 : -
        Finnish-type congenital nephrotic syndrome (NPHS1, nephrin) -
        Denys-Drash syndrome (WT1) - Frasier syndrome (WT1) - Diffuse mesangial
        sclerosis (WT1, PLCE1) - Autosomal recessive, familial FSGS (NPHS2,
        podocin) - Autosomal dominant, familial FSGS (ACTN4, α-actinin-4; TRPC6)
        - Nail-patella syndrome (LMX1B) - Pierson syndrome (LAMB2) - Schimke
        immuno-osseous dysplasia (SMARCAL1) 8 - Galloway-Mowat syndrome -
        Oculocerebrorenal (Lowe) syndrome
      </Text>
      <Text style={{ marginTop: 20, color: "#fff" }}>2). Primer</Text>
      <Text style={styles.materi}>
        Berdasarkan gambaran patologi anatomi, sindrom nefrotik primer atau
        idiopatik adalah sebagai berikut : - Sindrom Nefrotik Kelainan Minimal
        (SNKM) - Glomerulosklerosis fokal segmental (GSFS) - Mesangial
        Proliferative Difuse (MPD) - Glomerulonefritis Membranoproliferatif
        (GNMP) - Nefropati Membranosa (GNM)
      </Text>
      <Text style={{ marginTop: 20, color: "#fff" }}>3). Sekunder</Text>
      <Text style={styles.materi}>
        Sindrom nefrotik sekunder mengikuti penyakit sistemik, antara lain
        sebagai berikut : - lupus erimatosus sistemik (LES) - keganasan, seperti
        limfoma dan leukemia - vaskulitis, seperti granulomatosis Wegener
        (granulomatosis dengan poliangitis), sindrom Churg-Strauss
        (granulomatosis eosinofilik dengan poliangitis), poliartritis nodosa,
        poliangitis mikroskopik, purpura Henoch Schonlein - Immune complex
        mediated, seperti post streptococcal (postinfectious) glomerulonephritis
      </Text>
    </View>
  );
}

function ManifestastiKlinisSindromNefrotik() {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Manifestasi Klinis</Text>
      <Text style={styles.materi}>1). Proteinuria </Text>
      <Text style={styles.materi}>
        Protenuria merupakan kelainan utama pada sindrom nefrotik. Apabila
        ekskresi protein ≥ 40 mg/jam/m2 luas permukaan badan disebut dengan
        protenuria berat. Hal ini digunakan untuk membedakan dengan protenuria
        pada pasien bukan sindrom nefrotik.
      </Text>
      <Text style={{ marginTop: 20, color: "#fff" }}>2). Hipoalbuminemia </Text>
      <Text style={styles.materi}>
        Salah satu manifestasi pada pasien sindrom nefrotik pada anak terjadi
        hipoalbuminemia apabila kadar albumin kurang dari 2,5 g/dL.
      </Text>
      <Text style={{ marginTop: 20, color: "#fff" }}>3). Edema </Text>
      <Text style={styles.materi}>
        Terdapat beberapa teori yang menjelaskan tentang timbulnya edema pada
        sindrom nefrotik. Underfilled theory merupakan teori klasik tentang
        pembentukan edema. Teori ini berisi bahwa adanya edema disebabkan oleh
        menurunnya tekanan onkotik intravaskuler dan menyebabkan cairan merembes
        ke ruang interstisial.
      </Text>
      <Text style={{ marginTop: 20, color: "#fff" }}>
        4). Hiperkolesterolemia
      </Text>
      <Text style={styles.materi}>
        Hampir semua kadar lemak (kolesterol, trigliserid) dan lipoprotein serum
        meningkat pada sindrom nefrosis. Hal ini dapat dijelaskan dengan
        penjelasan antara lain yaitu adanya kondisi hipoproteinemia yang
        merangsang sintesis protein menyeluruh dalam hati, termasuk lipoprotein.
        Selain itu katabolisme lemak menurun karena terdapat penurunan kadar
        lipoprotein lipase plasma, sistem enzim utama yang mengambil lemak dari
        plasma
      </Text>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
