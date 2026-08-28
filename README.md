# Implementasi OpenAI SDK Menggunakan JavaScript pada Node.js dengan OpenRouter

## Deskripsi

Repository ini berisi dokumentasi dan hasil praktik penggunaan **OpenAI SDK dengan JavaScript pada Node.js**, dengan **OpenRouter sebagai API Provider**.

Praktik ini dilakukan untuk memahami bagaimana aplikasi JavaScript dapat berkomunikasi dengan Large Language Model (LLM) melalui API menggunakan OpenAI SDK. Karena API Provider yang digunakan adalah OpenRouter, konfigurasi OpenAI SDK diarahkan ke endpoint OpenRouter.

Pada praktik ini, pengujian dilakukan dengan mengirimkan prompt sederhana dan memastikan aplikasi berhasil menerima response dari model AI.

---

## Tujuan

Praktik ini bertujuan untuk:

- Memahami penggunaan **OpenAI SDK**.
- Memahami penggunaan **JavaScript pada Node.js** untuk mengakses API AI.
- Memahami cara menggunakan **OpenRouter sebagai API Provider**.
- Memahami cara melakukan konfigurasi **API Key** menggunakan file `.env`.
- Memahami proses mengirim request ke model AI.
- Menguji apakah koneksi API berhasil.
- Mendokumentasikan hasil implementasi dan mengunggahnya ke GitHub.

---

## Teknologi yang Digunakan

| Teknologi          | Keterangan                           |
| ------------------ | ------------------------------------ |
| JavaScript         | Bahasa pemrograman yang digunakan    |
| Node.js            | Runtime untuk menjalankan JavaScript |
| OpenAI SDK         | SDK untuk melakukan request ke API   |
| OpenRouter         | API Provider yang digunakan          |
| dotenv             | Membaca konfigurasi dari file `.env` |
| Visual Studio Code | Code editor dan terminal             |
| Git & GitHub       | Version control dan repository       |

---

## Prasyarat

Sebelum menjalankan project, pastikan sudah tersedia:

- Node.js
- npm
- Visual Studio Code
- Akun OpenRouter
- API Key OpenRouter
- Git dan akun GitHub

Untuk mengecek Node.js dan npm melalui terminal:

```bash
node -v
npm -v
```

---

## 1. Membuat Project Node.js

Project dibuat menggunakan Node.js.

Masuk ke folder project melalui terminal VS Code:

```bash
cd C:\openai-sdk-poc
```

Kemudian inisialisasi project Node.js:

```bash
npm init -y
```

Perintah tersebut akan membuat file:

```text
package.json
```

---

## 2. Menginstall OpenAI SDK

OpenAI SDK diinstall menggunakan npm:

```bash
npm install openai
```

Package `openai` digunakan untuk membuat client dan melakukan request ke API.

---

## 3. Menginstall dotenv

Untuk menyimpan API Key secara terpisah dari source code, digunakan package `dotenv`:

```bash
npm install dotenv
```

API Key tidak ditulis langsung di dalam source code agar tidak mudah terekspos ketika project di-upload ke GitHub.

---

## 4. Membuat API Key OpenRouter

Pada praktik ini, API Provider yang digunakan adalah **OpenRouter**.

API Key diperoleh dari akun OpenRouter dan digunakan sebagai credential untuk mengakses model AI.

API Key kemudian disimpan pada file `.env`.

Contoh:

```env
OPENROUTER_API_KEY=your_api_key_here
```

> Jangan memasukkan API Key asli ke dalam repository GitHub.

---

## 5. Membuat File `.gitignore`

Agar file `.env` tidak ikut ter-upload ke GitHub, buat file:

```text
.gitignore
```

Isi dengan:

```gitignore
node_modules/
.env
```

Dengan begitu, API Key yang tersimpan di `.env` tidak akan ikut masuk ke repository.

---

## 6. Konfigurasi OpenAI SDK dengan OpenRouter

OpenAI SDK dapat digunakan untuk mengakses OpenRouter dengan mengubah `baseURL` dan memasukkan API Key OpenRouter.

Contoh implementasi:

```javascript
require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function main() {
  const completion = await client.chat.completions.create({
    model: "openai/gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Halo, test API berhasil?",
      },
    ],
  });

  console.log(completion.choices[0].message.content);
}

main();
```

Pada implementasi tersebut:

- `dotenv` digunakan untuk membaca API Key dari `.env`.
- `OpenAI` digunakan sebagai SDK.
- `baseURL` diarahkan ke endpoint OpenRouter.
- `apiKey` menggunakan API Key dari OpenRouter.
- `model` menentukan model AI yang digunakan.
- `messages` berisi prompt yang dikirimkan kepada model.
- `console.log()` digunakan untuk menampilkan response pada terminal.

---

## 7. Menjalankan Program

Program dijalankan melalui terminal VS Code.

Jika file JavaScript yang digunakan bernama `index.js`, jalankan:

```bash
node index.js
```

Jika konfigurasi sudah benar dan API berhasil terhubung, terminal akan menampilkan response dari model AI.

Contoh hasil pengujian:

```text
Halo! Test API berhasil.
```

Hasil tersebut menunjukkan bahwa:

1. Node.js berhasil menjalankan program.
2. OpenAI SDK berhasil digunakan.
3. API Key berhasil dibaca.
4. Request berhasil dikirim ke OpenRouter.
5. Model AI berhasil memberikan response.

---

## 8. Alur Kerja

Alur implementasi yang dilakukan:

```text
JavaScript
    ↓
Node.js
    ↓
OpenAI SDK
    ↓
OpenRouter API
    ↓
AI Model
    ↓
Response
    ↓
Terminal VS Code
```

OpenAI SDK digunakan sebagai interface untuk melakukan request, sedangkan OpenRouter digunakan sebagai API Provider yang meneruskan request ke model AI yang dipilih.

---

## 9. Struktur Folder

Struktur project yang digunakan:

```text
openai-sdk-poc/
│
├── node_modules/
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

### Penjelasan

| File/Folder         | Fungsi                                     |
| ------------------- | ------------------------------------------ |
| `node_modules/`     | Menyimpan dependency project               |
| `.env`              | Menyimpan API Key secara lokal             |
| `.gitignore`        | Mencegah file tertentu di-upload ke GitHub |
| `index.js`          | Source code utama untuk pengujian API      |
| `package.json`      | Informasi dan dependency project           |
| `package-lock.json` | Mengunci versi dependency                  |

---

## 10. Pengujian API

Pengujian dilakukan dengan mengirimkan prompt sederhana melalui OpenAI SDK.

Prompt:

```text
Halo, test API berhasil?
```

Request kemudian dikirim melalui:

```text
OpenAI SDK → OpenRouter → AI Model
```

Response dari model kemudian ditampilkan melalui terminal menggunakan:

```javascript
console.log(completion.choices[0].message.content);
```

### Hasil

Pengujian berhasil dan program menampilkan response dari AI pada terminal.

Dengan demikian, koneksi antara **JavaScript/Node.js, OpenAI SDK, dan OpenRouter** berhasil dilakukan.

---

## 11. Kelebihan Implementasi

Beberapa kelebihan dari pendekatan ini:

- Menggunakan SDK yang sudah menyediakan struktur API client.
- Implementasi JavaScript dapat dijalankan menggunakan Node.js.
- OpenRouter memungkinkan penggunaan berbagai model AI melalui satu API.
- API Key dapat disimpan menggunakan environment variable.
- Struktur project sederhana sehingga cocok untuk pembelajaran dan Proof of Concept (POC).
- Dapat dikembangkan menjadi aplikasi AI yang lebih kompleks.

---

## 12. Kekurangan dan Hal yang Perlu Diperhatikan

Beberapa hal yang perlu diperhatikan:

- API membutuhkan API Key.
- Penggunaan model/API dapat memiliki batasan atau biaya sesuai provider.
- Response bergantung pada model AI yang digunakan.
- API Key harus dijaga dan tidak boleh di-upload ke repository public.
- Implementasi ini masih berupa Proof of Concept dan belum memiliki fitur aplikasi yang kompleks.
- Error handling dapat dikembangkan lebih lanjut untuk menangani kegagalan request API.

---

## 13. Pengembangan Selanjutnya

Implementasi ini masih dapat dikembangkan menjadi aplikasi yang lebih lengkap, seperti:

- Membuat chatbot sederhana.
- Membuat interface menggunakan web frontend.
- Menambahkan conversation history.
- Menambahkan error handling.
- Menambahkan system prompt.
- Mengintegrasikan AI ke dalam backend aplikasi.
- Menggunakan beberapa model AI dan membandingkan hasilnya.
- Menambahkan logging dan monitoring API.
- Mengembangkan project menjadi aplikasi AI yang lebih kompleks.

---

## 14. Kesimpulan

Berdasarkan praktik yang telah dilakukan, **OpenAI SDK dapat digunakan pada JavaScript dengan Node.js untuk melakukan komunikasi dengan model AI melalui API**.

Dalam praktik ini, **OpenRouter digunakan sebagai API Provider**, sehingga OpenAI SDK dikonfigurasi menggunakan endpoint OpenRouter dan API Key dari OpenRouter.

Pengujian menggunakan prompt sederhana berhasil menghasilkan response dari model AI. Hal ini menunjukkan bahwa konfigurasi **Node.js → OpenAI SDK → OpenRouter → AI Model** telah berhasil dilakukan.

Praktik ini menjadi dasar untuk memahami integrasi AI API pada aplikasi JavaScript dan dapat dikembangkan lebih lanjut menjadi aplikasi berbasis AI.

---

## Repository

Project ini dibuat sebagai **Proof of Concept (POC) pembelajaran OpenAI SDK menggunakan JavaScript dan Node.js dengan OpenRouter sebagai API Provider**.

```text
OpenAI SDK
     +
JavaScript
     +
Node.js
     +
OpenRouter
     ↓
AI API Integration
```
