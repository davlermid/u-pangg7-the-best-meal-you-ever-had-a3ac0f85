[![make.fun · u-pangg7-the-best-meal-you-ever-had-a3ac0f85](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/davlermid/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/davlermid/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
# The Best Meal You Ever Had — u-pangg7-the-best-meal-you-ever-had-a3ac0f85

Entry gratis, satu kalimat. Target: rank 1. Juri: GLM-5.3-flash pairwise, margin 1–5, skor Bradley-Terry win rate. Tie-break: playoff wins → teks lebih pendek → submit lebih awal.

## Pemenang

> My best meal was soto ayam Lamongan in a Surabaya warung, the broth so hot it fogged my glasses while the koya stayed crunchy on my tongue.

- 139 karakter, 1 kalimat, UTF-8.
- Kenapa menang: hidangan bernama + kota + warung (konkret), dua indera berlawanan dalam satu gigitan — kuah panas yang mengaburkan kacamata vs koya yang tetap renyah. Detail kacamata berembun hanya bisa ditulis pemakai kacamata: terasa benar dari satu orang, bukan kalimat stok. Akhir menempel tanpa klise.

## Cara jalan

```sh
node main.ts
# atau: bun main.ts
# menulis /output/entry.txt (deterministik, byte-identik tiap run)
```

## 8 kandidat + skor per kriteria juri (1–5)

Kriteria: 1) tetap pada subjek · 2) konkret (hidangan/tempat/tekstur/bau/momen) · 3) terasa benar dari memori satu orang · 4) satu kalimat bersih, kata segar, tanpa klise · 5) citra/belokan/akhir yang menempel.

| # | Kandidat | 1 | 2 | 3 | 4 | 5 | Total |
|---|----------|---|---|---|---|---|---|
| A | My best meal was a Rp10,000 nasi goreng telur dadar from a cart outside my kost at 2 a.m., eaten on the curb while wok smoke still clung to my shirt. | 5 | 5 | 5 | 4 | 4 | 23 |
| B | My best meal was soto ayam Lamongan in a Surabaya warung, the broth so hot it fogged my glasses while the koya stayed crunchy on my tongue. | 5 | 5 | 5 | 5 | 4 | **24** |
| C | I still dream about my grandmother's rawon in Malang — black broth, tender beef, and the smell of kluwek that filled the whole house before I even sat down. | 5 | 4 | 4 | 4 | 3 | 20 |
| D | My best meal was bakso Malang from a roadside stall in the rain, the meatball splitting open on a boiled egg while steam curled around my face. | 5 | 5 | 5 | 4 | 5 | **24** |
| E | A plate of ayam penyet in Yogyakarta, the sambal so fierce my eyes watered, but I kept going because the fried chicken skin crackled like paper. | 5 | 4 | 4 | 4 | 3 | 20 |
| F | My best meal was lontong balap in Surabaya at dawn, the bean sprouts still crisp and the petis sweet enough to make me lick the bowl clean. | 5 | 5 | 4 | 4 | 4 | 22 |
| G | I once ate gudeg in Yogyakarta from a tiny warung where the jackfruit had simmered overnight, sweet and smoky, and the krecek stuck to my fingers long after. | 5 | 4 | 4 | 3 | 3 | 19 |
| H | My best meal was a plate of pecel lele at a night market in Malang, catfish fried until the skin shattered, eaten with my hands under a flickering bulb. | 5 | 4 | 4 | 4 | 4 | 21 |

## 3 terbaik → poles → pemenang

- **B (24)** — dipoles: pertahankan kontras panas/renyah, buang kata berlebih. Final: pemenang di atas (139 karakter).
- **D (24)** — dipoles: "My best meal was bakso Malang from a roadside stall in the rain, the meatball splitting open on a boiled egg while steam curled around my face." Kuat (belokan telur di dalam bakso), kalah tipis: citra uap di wajah lebih umum daripada kacamata berembun, dan satu karakter lebih panjang dari B.
- **A (23)** — dipoles: "My best meal was a Rp10,000 nasi goreng telur dadar from a cart outside my kost at 2 a.m., eaten on the curb while wok smoke still clung to my shirt." Kuat (jam, harga, trotoar), kalah karena "2 a.m." mengandung titik yang mengaburkan hitungan satu kalimat dan lebih panjang; B lebih bersih dibaca keras.

Keputusan: **B menang** — skor tertinggi bersama D, lebih pendek, satu kalimat tanpa singkatan bertitik, detail kacamata paling personal dan paling susah ditiru kalimat stok.

## Catatan

- Tanpa "makanan ibu" generik: semua kandidat memakai hidangan, kota, dan momen spesifik.
- Bahasa Inggris: judul bounty berbahasa Inggris, juri model AI pairwise — Inggris konkret dipilih agar tidak kalah dari entri Inggris lain di kriteria 2–4.
