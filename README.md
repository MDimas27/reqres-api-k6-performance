# K6 API Testing and Performance Testing

Proyek ini berisi skenario uji untuk pengujian integrasi dan pengujian performa menggunakan alat pengujian kinerja k6. Dua API yang diuji adalah API Create dan API Update.

## Installation

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [k6](https://k6.io/docs/getting-started/installation/) di komputer Anda.

1. Clone repositori ini ke komputer Anda:

   ```bash
   git clone https://github.com/MDimas27/reqres-api-k6-performance.git
   ```
2. Masuk ke direktori proyek:

    ```bash
    cd reqres-api-k6-performance
    ```
3. Install dependensi:

    ```bash
    npm install
    ```

## Usage
4. Jalankan skenario uji integrasi:

    ```bash
    k6 run scenarios/integration_test.js
    ```
5. Jalankan skenario uji performa dan hasilnya akan diekspor sebagai file JSON dan HTML di direktori /reports:

    ```bash
    k6 run --summary-export=reports/summary.json scenarios/performance_test.js
    ```

