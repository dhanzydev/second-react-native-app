import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./pages/List";
import { wrap } from "lodash";

const DATA = [
  {
    id: "1",
    title: "Gonore",
    subJudul: {
      judul1: "Definisi\n",
      judul2: "Etiologi dan Karakteristik \n",
      judul3: "Penularan \n",
      judul4: "Gejala Klinis \n",
      judul5: "Diagnosis \n",
      judul6: "Pengobatan Gonore \n",
      judul7: "Pengobatan Alternatif \n",
      judul8: "Pencitraan \n",
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
      pengobatanGonore: {
        item1: "Ceftriaxone 250 mg, im single dose",
        item2: "Ciprofloxacin 500 mg, single oral dose",
        item3: "Oflosacin 400 mg, single oral dose ",
        item4: "Thiamphenicol 3.5 g, single oral dose ",
        item5: "Spectinomycine 2 g, im single dose",
        item6: "Kanamycin 2 g, single oral dose",
        item7: "Golongan cefixime",
      },
      pengobatanAlternatif: {
        item1: "Penisilin procain dalam aqua 3 juta iu im + ",
        item2: "Ampicillin 3.5 g single dose + 1 g probenecid ",
        item3: "Amoxycillin 3 g, single dose + 1 g probenecid ",
        item4: "Amoxicillin + clavulanic acid 3 g, single dose",
      },
    },
  },
  {
    id: "2",
    title: "Sifilis",
    subJudul: {
      judul1: "Definisi \n",
      judul2: "Etiologi \n",
      judul3: "Gejala Klinis \n",
      judul4: "Pembantu Diagnosis \n",
      judul5: "Pengobatan \n",
      judul6: "Pengawasan \n",
      judul7: "The Complete Treatment of STI \n",
      judul8: "Pencitraan \n",
    },
    isiMateri: {
      materi1:
        "Penyakit infeksi yang disebabkan Treponema pallidum, bersifat sangat kronik, sistemik, dan menyerang hamper semua alat tubuh sehingga dapat menyerupai banyak penyakit, memiliki masalaten dan dapat ditularkan dari ibu ke janin. ",
      materi2:
        "Treponema pallidum mmeiliki bentuk spiral yang terdiri dari 9-24 lekukan, dan bergerak seperti skrup. Berkembangbiak dengan pembelahan melintang. Bakteri ini tidak tahan terhadap lingkungan panas, kering, dan antiseptic. Serta dalam tubuh dapat hidup sampai 72 jam.",
    },
    itemList: {
      stadiumI: {
        item1: "Stadium I",
        item2: "Msa inkubasi : 9-90 hari",
        item3: "Lesi I",
        item4: "Mula-mula akan timbul papel, lalu menjadi erosi,",
        item5: "Lokasinya berada koronarius ",
        item6: "Lesi primer dapat sembuh sendiri, dan bersifat",
      },
      stadiumII: {
        item1: "STADIUM II",
        item2: "Timbul ruam : 6-8 minggu (3 minggu setelah",
        item3: "Pada fase ini sangat menular ",
        item4: "Gejala klinisnya sangat bervarias dan",
        item5: "Gejala konstitusi : anoreksia, malaise, sakit kepala, ",
        item6: "Kelenjar getah bening superficial membesar",
        item7: "Rambut menjadi rontok",
        item8: "Kuku menjadi rapuh",
      },
      sifilisLaten: {
        item1: "Sifilis Laten",
        item2: "Disebut juga sifilis tersembunyi, tidak memiliki",
      },
      sifilisLanjut: {
        item1: "Sifilis Lanjut",
        item2: "Sangat destruktif",
        item3: "Menyerang semua jaringan ",
        item4: "Treponema pallidum sukar ditemukan pada fase ini",
        item5: "Pada fase ini tidak infeksius",
        item6: "Terdapat guma pada seluruh tubuh dan organ",
      },
      pemeriksaan: {
        item1: "Pemeriksaan treponema pallidum",
        item2: "Mikroskop lapangan gelap : melihat bentuk dan",
        item3: "Tes Serologi Sifilis (TSS)",
        item4: "Pemeriksaan pembantu yang penting, sebagai",
      },
      siDanSii: {
        item1: "SI dan SII",
        item2: "Penicillin G benzathin : 2,4 juta i.u/mg dosis total",
        item3: "Penicillin prokain aqua : 600 ribu i.u/hr dosis total",
        item4: "Penicillin prokain minyak dg Al stearat (PAM) : ",
        item5: "Bila alergi pensisilin : ",
        item6: "Eritromisin 4x500 mgejalahari selama 15 hari ",
        item7: "Tetrasiklin HCl 4x500 mgejalahari selama 15",
      },
      sifilisLatenLanjut: {
        item1: "Sifilis Laten Lanjut",
        item2: "Penicillin G benzathin : 2,4 juta i.u/mg dosis",
        item3: "Penicillin prokain aqua : 600 ribu i.u/hr dosis",
        item4: "Penicillin prokain minyak dg Al stearat (PAM) :",
      },
      item1: "Penting untuk mendapatkan hasil pengobatan yang",
      siDanSiiPengawasan: {
        item1: "SI dan SII",
        item2: "Setiap bulan sampai 3 bulan dalam setahun",
        item3: "Setiap 3 bulan sampai setahun",
        item4: "Kemudian bulan ke 18 dan 24",
      },
      sifilisLatenPengawasan: {
        item1: "Sifilis Laten",
        item2: "Setiap bulan selama 3 bulan",
        item3: "Setiap 3 bulan salaam 9 bulan ",
        item4: "Setiap 6 bulan selama 1 tahun",
        item5: "Seterusnya sekali setahun",
      },
      item2: "Education",
      item3: "Counselling",
      item4: "Effective treatment",
      item5: "Contact tracing",
      item6: "Treatment of sexual partner",
    },
  },
  {
    id: "3",
    title: "Herpes Genitalia",
    subJudul: {
      judul1: "Definisi \n",
      judul2: "Gambaran Klinis \n",
      judul3: "Diagnosis \n",
      judul4: "Pengobatan \n",
      judul5: "Pencitraan \n",
    },
    isiMateri:
      "Penyakit ini merupakan infeksi Herpes Simplex virus(HSV) pada genitalia dan sekitarnya.Bersifat rekurens dengan masa inkubasi 3-7 hari.Diantara HSV- 1 dan HSV - 2, HSV - 2 menjadi penyebab terbanyak terjadinya herpes genitalia.",
    itemList: {
      item1: "Virus herpes yang mikrolesi masuk melalui epitel",

      item2: "Virus bergabung dengan DNA hospes hingga terjadi",
      item3: "Virus melalui serabut saraf sensoris perifer secara",
      infeksiPrimer: {
        item1: "Infeksi Primer",
        item2: "Terlihat vesikel berkelompok, dengan dasar",
        item3: "Vesikel yang pecah akan sebabkan erosi dan ulkus",
        item4: "Lesi akan sembuh tanpa sikatrik pada 15-21 hari ",
      },
      infeksiRekuren: {
        item1: "Infeksi Rekuren",
        item2: "Gejala klinis lebih ringan dan perjalanan penyakit",
        item3: "Lesi akan sembuh dalam waktu 8-10 hari ",
      },
      item4: "Secara klinis terlihat khas dengan berupa vesikel",
      pemeriksaanLabo: {
        item1: "Bila memungkinkan ditunjang dengan pemeriksaan",
        item2: "Tzanck smear",
        item3: "Pemeriksaan ELISA ",
        item4: "Kultur jaringan",
        item5: "Polimerase Chain Reaction (PCR)",
      },
      profilaksis: {
        item1: "Profilaksis",
        item2: "Kondom",
        item3: "Penerangan pada penderita kapan saat penularan ",
        item4: "Menghilangkan faktor pencetus ",
        item5: "Operasi Saesaria pada wanita hamil dengan lesi di",
      },
      pengobatanNonSpesifik: {
        item1: "Pengobatan non spesifik",
        item2: "Analgetika",
        item3: "Antiseptik Yodium povidon",
        item4: "Psikoterapi",
      },
      pengobatanSpesifik: {
        item1: "Pengobatan spesifik ",
        lesiPrimer: {
          item1: "Lesi Primer",
          item2: "Asiklovir 5 x 200 mgejalahr (10 hari)",
          item3: "Valsiklovir 2 x 500 mgejalahr (5-10 hari)",
        },
        lesiRekuren: {
          item1: "Lesi Rekuren",
          item2: "Asiklovir 5 x 200 mgejalahr (5 hari) ",
          item3: "Valsiklovir 2 x 500 mgejalahr (5 hari)",
        },
      },
    },
  },
  {
    id: "4",
    title: "Trichomoniasis",
    subJudul: {
      judul1: "Definisi \n",
      judul2: "Gejala Klinis \n",
      judul3: "Diagnosis \n",
      judul4: "Pengobatan \n",
      judul5: "Pencitraan \n",
    },
    materi: {
      materi1:
        "Penyakit yang disebabkan infeksi protozoa Trichomonas vaginalis. Penularannya melalui hubungan seksual, menyerang traktus urogenital dengan masa inkubasi 3-28 hari.",
      materi2:
        "Diagnosis dapat tegak bila terdapat T. vaginalis pada pemeriksaan sediaan langsung dan kultur bakteri",
    },
    listItem: {
      item1: "Terkdang asimptomatis 50-75% penderita tidak",
      item2: "30% penderita mengeluarkan duh tubuh klasik",
      item3: "Metronidazol 2 gram per oral, dosis tunggal atau",
      item4: "Pengobatan tidak hanya kepada pasien tetapi pada",
    },
  },
  {
    id: "5",
    title: "Uretritis Non Spesifik UNS",
    subJudul: {
      judul1: "Definisi \n",
      judul2: "Gejala Klinis \n",
      judul3: "Diagnosa \n",
      judul4: "Pengobatan \n",
      judul5: "Pencitraan \n",
    },
    materi: {
      materi1:
        "Peradangan uretra yang disebabkan karena bakteri Chlamydia trachomatis, Ureaplasma urealiticum, Trichomonas vaginalis.",
      materi2:
        "Diagnosis ditegakan dengan gejala kllinis dan pemeriksaan laboratorium. Pemeriksaan laboratorium dapat dilakukan dengan ELISA, imunofluoresences, probe dan PCR ",
    },
    listItem: {
      item1: "M.I : 1-3 minggu, tidak seberat gonore ",
      item2: {
        gejalanya: {
          item1: "Gejalanya : ",
          item2: "disuri ringan",
          item3: "polakisuri",
          item4: "perasaan tidak enak di uretra",
          item5: "keluarnya duh tubuh seropurulent",
          item6: "Kadang-kadang tidak terlihat keluarnya duh tubuh.",
        },
      },
      item3: "Gonore pada perempuan tidak khas, dan bersifat",
      item4: {
        keluhan: {
          item1: "Sebagian kecil dengan keluhan:",
          item2: "keluarnya duh tubuh vagina",
          item3: "disuri ringan",
          item4: "polakisuri",
          item5: "nyeri di daerah pelvis dan",
          item6: "disparenia",
        },
      },
      item5: "Pada pemeriksaan serviks dapat terlihat tanda",
      item6: "Tetrasiklin : 4 x 500 mg/hr selama 1 minggu",
      item7: "Eritromisin : 4 x 500 mg/hr selama 1 minggu",
      item8: "Doksisiklin : 2 x 100 mg/hr selama 1 minggu ",
      item9: "Azitromycin : 1 gram single dose",
      item10: "Ofloksasin : 2 x 200 mg/hr selama 10 hari",
    },
  },
];

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentWrapper: {
    marginTop: 10,
    backgroundColor: "#F675A8",
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
    marginBottom: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,
  },
});

function DetailsScreen({ route }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  if (itemId === DATA[0].id) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{DATA[0].title}</Text>
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
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul6}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item1}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item2}
              </Text>
              <Text style={styles.triangle}></Text>
              <Text style={styles.itemList}>skg banyak</Text>
              <Text style={styles.itemList}>yg resisten</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item3}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item4}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item5}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item6}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanGonore.item7}
              </Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>single dose 400mg</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul7}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanAlternatif.item1}
              </Text>
              <Text style={styles.itemList}>
                1 g probenecid (gol penicillin skg udh resisten)
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanAlternatif.item2}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanAlternatif.item3}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[0].itemList.pengobatanAlternatif.item4}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[0].subJudul.judul8}</Text>
            <Image
              style={styles.image}
              source={require("./assets/images/gambar-genore-1.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else if (itemId === DATA[1].id) {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{DATA[1].title}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul1}</Text>
            <Text style={styles.materi}>{DATA[1].isiMateri.materi1}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul2}</Text>
            <Text style={styles.materi}>{DATA[1].isiMateri.materi2}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul3}</Text>
            <Text>{DATA[1].itemList.item1}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item2}
              </Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>rata-rata 3 minggu</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item3}
              </Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>
                chare, di anogenital, dan soliter
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item4}
              </Text>
              <Text style={styles.itemList}>
                lalu menjadi ulkus, dangkal dan bersih, dan dinding tak bergaung
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item5}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumI.item6}
              </Text>
              <Text style={styles.itemList}>
                laten. Lesinya mungkin sembuh tapi sifilisnya tidak
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text>{"\n"}</Text>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item2}
              </Text>
              <Text style={styles.itemList}>stadium I)</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item4}
              </Text>
              <Text style={styles.itemList}>bermacam-macam</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item5}
              </Text>
              <Text style={styles.itemList}>BB turun, demam</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item6}
              </Text>
              <Text style={styles.itemList}></Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item7}
              </Text>
              <Text style={styles.itemList}></Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.stadiumII.item8}
              </Text>
              <Text style={styles.itemList}></Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text>{"\n"}</Text>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLaten.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLaten.item2}
              </Text>
              <Text style={styles.itemList}>
                gejala klinis tapi tes serologinya (+)
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text>{"\n"}</Text>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item5}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLanjut.item6}
              </Text>
              <Text style={styles.itemList}>dalam</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul4}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.pemeriksaan.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.pemeriksaan.item2}
              </Text>
              <Text style={styles.itemList}>
                pergerakan. Treponema akan terlihat putih pada latar belakang
                gelap
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.pemeriksaan.item3}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.pemeriksaan.item4}
              </Text>
              <Text style={styles.itemList}>
                prognosis hasil pengobatan. TSS terdiri dari 2 macam yakni tes
                non treponemal dan tes trponemal
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul5}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item2}
              </Text>
              <Text style={styles.itemList}>
                4,8 juta i.u. interval 1 minggu
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item3}
              </Text>
              <Text style={styles.itemList}>6 juta i.u. selama 10 hari</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item4}
              </Text>
              <Text style={styles.itemList}>
                1,2 juta i.u./x 2x seminggu dosis total 4,8 juta i.u.
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item5}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item6}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSii.item7}
              </Text>
              <Text style={styles.itemList}>hari</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenLanjut.item1}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenLanjut.item2}
              </Text>
              <Text style={styles.itemList}>total 7,2 juta i.u</Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenLanjut.item3}
              </Text>
              <Text style={styles.itemList}>
                total 12 juta i.u. selama 20 hari
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenLanjut.item4}
              </Text>
              <Text style={styles.itemList}>1,2 juta i.u./x</Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>
                2x seminggu dosis total 7,2 juta i.u
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul6}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item1}</Text>
              <Text style={styles.itemList}>sempurna</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSiiPengawasan.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSiiPengawasan.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSiiPengawasan.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.siDanSiiPengawasan.item4}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenPengawasan.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenPengawasan.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenPengawasan.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenPengawasan.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[1].itemList.sifilisLatenPengawasan.item5}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul7}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item2}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item3}</Text>
              <View style={styles.triangle}></View>
              <Text style={styles.itemList}>
                jangan sampe menularkan ke pasangan
              </Text>
              <Text style={styles.itemList}>
                dan jangan sampai mengulangi penyakit yang sama
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item4}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item5}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[1].itemList.item6}</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[1].subJudul.judul8}</Text>
            <Image
              style={styles.image}
              source={require("./assets/images/2.jpg")}
            />
            <Image
              style={styles.image}
              source={require("./assets/images/3.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else if (itemId === DATA[2].id) {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{DATA[2].title}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[2].subJudul.judul1}</Text>
            <Text style={styles.materi}>{DATA[2].isiMateri}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[2].subJudul.judul2}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[2].itemList.item1}</Text>
              <Text style={styles.itemList}>mukosa atau kulit hospes</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[2].itemList.item2}</Text>
              <Text style={styles.itemList}>
                replikasi, menyebabkan penyakit kulit, dan fokal nekrosis akibat
                proses degenerasi ballooning pada sel
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[2].itemList.item3}</Text>
              <Text style={styles.itemList}>
                ascenden menuju ke ganglion saraf pada medulla spinalis
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiPrimer.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiPrimer.item2}
              </Text>
              <Text style={styles.itemList}>eritematosa dan terasa nyeri</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiPrimer.item3}
              </Text>
              <Text style={styles.itemList}>dangkal</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiPrimer.item4}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiRekuren.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiRekuren.item2}
              </Text>
              <Text style={styles.itemList}>lebih singkat</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.infeksiRekuren.item3}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[2].subJudul.judul3}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[2].itemList.item4}</Text>
              <Text style={styles.itemList}>
                berkelompok dengan darsar eritematosa dan bersifat rekuren
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pemeriksaanLabo.item1}
              </Text>
              <Text style={styles.itemList}>laboratorium:</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pemeriksaanLabo.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pemeriksaanLabo.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pemeriksaanLabo.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pemeriksaanLabo.item5}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[2].subJudul.judul4}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.profilaksis.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.profilaksis.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.profilaksis.item3}
              </Text>
              <Text style={styles.itemList}>penyakit dapat terjadi</Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.profilaksis.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.profilaksis.item5}
              </Text>
              <Text style={styles.itemList}>genitalia</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanNonSpesifik.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanNonSpesifik.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanNonSpesifik.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanNonSpesifik.item4}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiPrimer.item1}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiPrimer.item2}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiPrimer.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiRekuren.item1}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiRekuren.item2}
              </Text>
            </View>
            <View style={styles.subSubList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[2].itemList.pengobatanSpesifik.lesiRekuren.item3}
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[2].subJudul.judul5}</Text>
            <Image
              style={styles.image}
              source={require("./assets/images/4.jpg")}
            />
            <Image
              style={{ width: 350, height: 350 }}
              source={require("./assets/images/5.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else if (itemId === DATA[3].id) {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{DATA[3].title}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[3].subJudul.judul1}</Text>
            <Text style={styles.materi}>{DATA[3].materi.materi1}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[3].subJudul.judul2}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[3].listItem.item1}</Text>
              <Text style={styles.itemList}>mengeluarkan duh tubuh</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[3].listItem.item2}</Text>
              <Text style={styles.itemList}>
                (warna kehijauan, berbusa, gatal, dyspareunia
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[3].subJudul.judul3}</Text>
            <Text style={styles.materi}>{DATA[3].materi.materi2}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[3].subJudul.judul4}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[3].listItem.item3}</Text>
              <Text style={styles.itemList}>2 x 500 mgr per oral (7 hari)</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[3].listItem.item4}</Text>
              <Text style={styles.itemList}>mitra seksualnya juga</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[3].subJudul.judul5}</Text>
            <Image
              style={styles.image}
              source={require("./assets/images/6.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else if (itemId === DATA[4].id) {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{DATA[4].title}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[4].subJudul.judul1}</Text>
            <Text style={styles.materi}>{DATA[4].materi.materi1}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[4].subJudul.judul2}</Text>
            <Text style={styles.materi}>Laki - Laki</Text>
            <Text>{"\n"}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item1}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item1}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item5}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item2.gejalanya.item6}
              </Text>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.materi}>Perempuan</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item3}</Text>
              <Text style={styles.itemList}>asimptomatis</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item1}
              </Text>
              <Text style={styles.itemList}></Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item2}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item3}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item4}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item5}
              </Text>
            </View>
            <View style={styles.subList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>
                {DATA[4].listItem.item4.keluhan.item6}
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item5}</Text>
              <Text style={styles.itemList}>
                servisitis yang disertai adanya folikel folikel kecil yang mudah
                berdarah
              </Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[4].subJudul.judul3}</Text>
            <Text style={styles.materi}>{DATA[4].materi.materi2}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[4].subJudul.judul4}</Text>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item6}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item7}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item8}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item9}</Text>
            </View>
            <View style={styles.wrapperList}>
              <View style={styles.orderList}></View>
              <Text style={styles.itemList}>{DATA[4].listItem.item10}</Text>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.subJudul}>{DATA[4].subJudul.judul5}</Text>
            <Image
              style={{ width: 350, height: 350, marginBottom: 20 }}
              source={require("./assets/images/7.jpg")}
            />
            <Image
              style={{ width: 350, height: 350, marginBottom: 20 }}
              source={require("./assets/images/8.jpg")}
            />
          </View>
        </ScrollView>
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
