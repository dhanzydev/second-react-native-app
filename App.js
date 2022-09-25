import * as React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./pages/List";

const DATA = [
  {
    id: "1",
    title: "GONORE",
    subJudul: {
      judul1: "Definisi\n",
      judul2: "Etiologi dan Karakteristik \n",
      judul3: "Penularan \n",
      judul4: "Gejala Klinis \n",
      judul5: "DIAGNOSIS \n",
      judul6: "PENGOBATAN GONORE \n",
      judul7: "PENGOBATAN ALTERNATIF \n",
      judul8: "PENCITRAAN \n",
    },

    isiMateri: {
      materi1:
        "Gonore merupakan penyakit infeksi yang disebabkan oleh Neisesseria gonorrhoeae.",
      materi2:
        "Berasal dari genus Neisseria. Spesies N. gonorrhoeae merupakan bakteri gram negative yang berbentuk diplokokus seperti biji kopi. Dapat bereaksi fermentasi pada glukosa, dan tidak tahan di lingkungan bebas.\n\nN. gonorrhoeae memiliki 4 tipe:",
      materi3:
        "Diagnosis dapat ditegakan setelah melakukan anamnesis, peeriksaan fisik, dan laboratorium. Pemeriksaan laboratorium dilakukan dengan menggunakan discharge uretra, prostatic massage, pharynx, rectum, atau kanalis cervicalis.",
      materi4:
        "Pemeriksaan dilakukan dengan pewarnaan gram, kultur bakteri, ter karbohidrat, ataupun tes PPNG. ",
    },
    itemList: {
      penularan: {
        item1: "Hubungan sesksual",
        item2: "Kontak langsung: ",
        item3: "Kontamani dengan jari",
        item4: "Melalui handuk yang terdapat bekas discharge",
        item5: "Tempat duduk toilet",
      },
      gejalaKlinis: {
        item1: "Masa inkubasi (2-5 hari) : rasa gatal dan panas pada",
        item2: "Infeksi I urethritis",
        item3: "Local : tysonitis, parauretritis, litritis, cowperitis",
        item4: "Ascendens : prostatitis, vesiculitis, differntitis",
        item5: "Masa inkubasi (2-5 hari) : pada wanita sulit diketahui",
        item6: "Inefksi I urethritis",
        item7: "Local : Paraurethritis, Bartholinitis, Cervicitis.",
        item8: "Ascendens: Salpingitis (kalau tidak segera",
        item9: "Akibat oral sex, deep kissing ",
        item10: "Gejala subjective : ",
        item11: "bisa tidak ada",
        item12: "sakit menelan yg berat",
        item13: "Gejala objective : ",
        item14: "bisa tidak ada",
        item15: "pus di tonsil dengan eritema dan edema ",
        item16: "Akibat anal sex. Biasanya merupakan infeksi awal",
        item17: "Gejala subjective : ",
        item18: "tidak ada",
        item19: "nyeri ringan dan perdarahan",
        item20: "Gejala objective : ",
        item21: "kadang mild secretion",
      },
    },
  },
  { id: "2", title: "apa", materi: "apa aja boleh kok" },
  { id: "3", title: "aja", materi: "tes1" },
  { id: "4", title: "boleh", materi: "tes2" },
  { id: "5", title: "nggak", materi: "tes3" },
];

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentWrapper: {
    marginTop: 10,
    backgroundColor: "#0096FF",
    padding: 10,
    borderRadius: 5,
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
});

function DetailsScreen({ route }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  if (itemId === DATA[0].id) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul1}</Text>
            <Text style={styles.materi}>{DATA[0].isiMateri.materi1}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul2}</Text>
            <Text style={styles.materi}>{DATA[0].isiMateri.materi2}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>TYPE I AND II : PILI (+) </Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>VIRULEN </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>TYPE II AND III : PILI (-)</Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>NON VIRULE </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul3}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.penularan.item1}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.penularan.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.penularan.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.penularan.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.penularan.item5}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>Melalui jalan lahir</Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>penularan dari ibu ke bayi</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul4}</Text>
            <Text style={styles.materi}>Laki - Laki</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item1}
              </Text>
              <Text style={styles.itemList}>
                OUE dan uretra, timbul dysuria, polakisuri, secret semi purulent
                – purulent. Ektropion dan pembesaran kelenjar getah bening.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item3}
              </Text>
              <Text style={styles.itemList}>
                Kalua tidak segera ditangani dapat menjadi ascenden
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item4}
              </Text>
              <Text style={styles.itemList}>
                funiculitis, epididymitis. Kalua sudah terjadi epididymitis
                pasien biasanya mengeluh testis nyeri dan bengkak
              </Text>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.materi}>Perempuan</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item5}
              </Text>
              <Text style={styles.itemList}>
                karena bersifat asimptomatis, laten, berkaitan dengan anatomi
                dan fisiologi alat kelamin
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item6}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item7}
              </Text>
              <Text style={styles.itemList}>
                Apabila tidak diobati akan mengenai tuba falopi trjadi
                salpingitis
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item8}
              </Text>
              <Text style={styles.itemList}>
                diobati sampai tuntas akan timbul sikatriks, akan mengganggu
                proses fertilisasi. Mengeluh infertilitas. Tidak bisa terjadi
                penemuan antara sperma dengan ovum. Karena ada sikatriks
                sehingga spermagabisa lewat), PID (infeksi pelvic)
              </Text>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.materi}>Infeksi gonore pada faring </Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item9}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item10}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item11}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item12}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item13}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item14}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>Tonsil eritem</Text>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.materi}>Infeksi gonore pada rectum </Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item16}
              </Text>
              <Text style={styles.itemList}>pada homosexuals</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item17}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item18}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item19}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item20}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.gejalaKlinis.item21}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul5}</Text>
            <Text style={styles.materi}>{DATA[0].isiMateri.materi3}</Text>
            <Text style={styles.materi}>{DATA[0].isiMateri.materi4}</Text>
          </View>
        </ScrollView>
      </View>
    );
  } else if (itemId === DATA[1].id) {
    return (
      <View>
        <Text>tes 2</Text>
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
