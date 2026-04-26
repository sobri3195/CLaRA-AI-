import type { ClinicalPathway } from '../types';

export const clinicalPathways: ClinicalPathway[] = [
  {
    id: 'stroke-perdarahan',
    title: 'Stroke Perdarahan / Stroke Hemoragik',
    shortTitle: 'Stroke Hemoragik',
    category: 'stroke',
    careSetting: ['IGD', 'Rawat Inap', 'ICU', 'Rehabilitasi Medik'],
    urgency: 'emergency',
    icd10: 'I60-I62',
    goals: [
      'Stabilisasi dini dan pencegahan perluasan perdarahan.',
      'Mencegah komplikasi neurologis sistemik selama perawatan akut.',
      'Transisi aman ke fase rehabilitasi dan tindak lanjut.'
    ],
    patientCriteria: [
      'Perdarahan intraserebral / ICH',
      'Perdarahan subaraknoid / SAH non-traumatik',
      'Onset akut',
      'Diagnosis ditegakkan dengan CT scan kepala non-kontras'
    ],
    relatedUnits: ['IGD', 'SMF Penyakit Saraf', 'Bedah Saraf bila ada', 'Radiologi', 'Laboratorium', 'Farmasi', 'ICU', 'Bangsal Rawat Inap'],
    phases: [
      {
        id: 'hem-0',
        title: 'Hari 0 IGD',
        timeWindow: 'Hari 0',
        setting: ['IGD'],
        assessment: [
          'Triage kegawatan FAST / Face Arm Speech Time',
          'Stabilisasi ABC',
          'Anamnesis onset / Last Known Well',
          'Pemeriksaan GCS, vital sign, SpO2, neurologis',
          'Skrining disfagia',
          'NIHSS, Barthel Index, mRS'
        ],
        diagnostics: ['Hematologi lengkap', 'GDS', 'PT/INR dan APTT bila riwayat antikoagulan', 'CT scan kepala non-kontras', 'EKG'],
        treatment: [
          'Head-up 30 derajat',
          'Oksigen bila SpO2 <94%',
          'Cairan isotonik, hindari overhidrasi',
          'Kontrol tekanan darah target SBP 140-160 mmHg untuk ICH',
          'Antipiretik bila demam',
          'Asam traneksamat sesuai protokol RS',
          'Manitol bila tanda peningkatan TIK',
          'Hentikan antikoagulan/antiplatelet',
          'Antikonvulsan bila kejang',
          'Koreksi koagulopati sesuai indikasi',
          'Evaluasi rujukan cepat bila perdarahan masif atau indikasi bedah'
        ]
      },
      {
        id: 'hem-13',
        title: 'Hari 1-3 Rawat Inap/ICU',
        timeWindow: 'Hari 1-3',
        setting: ['Rawat Inap', 'ICU'],
        monitoring: [
          'Monitoring GCS, neurologis, vital sign tiap shift',
          'Pantau peningkatan TIK',
          'Profilaksis DVT mekanik',
          'Skrining disfagia'
        ],
        treatment: ['Pencegahan aspirasi, perawatan jalan napas, dekubitus', 'Evaluasi CT ulang bila klinis memburuk', 'Nutrisi enteral bertahap bila aman menelan'],
        complicationWatch: ['Deteksi edema serebri, pneumonia aspirasi, ISK'],
        rehabilitation: ['Rehabilitasi dini ROM pasif-aktif sesuai kondisi']
      },
      {
        id: 'hem-45',
        title: 'Hari 4-5 Persiapan Pulang',
        timeWindow: 'Hari 4-5',
        setting: ['Rawat Inap'],
        assessment: ['GCS stabil', 'NIHSS, Barthel Index, mRS'],
        education: ['Edukasi kontrol tekanan darah', 'Kepatuhan obat antihipertensi', 'Edukasi tanda bahaya'],
        dischargePlanning: ['Jadwal kontrol ulang']
      }
    ],
    redFlags: ['GCS menurun progresif', 'Volume perdarahan besar', 'Midline shift/hidrosefalus', 'Kebutuhan bedah saraf', 'SAH suspek aneurisma'],
    referralCriteria: ['GCS menurun progresif', 'Volume perdarahan besar', 'Midline shift/hidrosefalus', 'Kebutuhan bedah saraf', 'SAH suspek aneurisma'],
    dischargeCriteria: ['Hemodinamik stabil', 'GCS stabil', 'Tidak ada komplikasi akut', 'Edukasi pasien dan keluarga lengkap'],
    qualityIndicators: [
      { id: 'hem-q1', label: 'CT scan kepala <25 menit sejak kedatangan', type: 'time', target: '<25 menit' },
      { id: 'hem-q2', label: 'Kontrol tekanan darah <1 jam', type: 'time', target: '<1 jam' },
      { id: 'hem-q3', label: 'Dokumentasi GCS serial', type: 'documentation' },
      { id: 'hem-q4', label: 'Edukasi pasien terdokumentasi', type: 'documentation' }
    ],
    guidelines: ['Clinical Pathway Internal Neurologi', 'Protokol Stroke Hemoragik terbaru'],
    notes: ['Dosis obat spesifik mengikuti kebijakan farmasi RS terbaru.']
  },
  {
    id: 'stroke-infark',
    title: 'Stroke Infark / Stroke Iskemik',
    shortTitle: 'Stroke Iskemik',
    category: 'stroke',
    careSetting: ['IGD', 'Rawat Inap', 'Rehabilitasi Medik'],
    urgency: 'emergency',
    icd10: 'I63',
    goals: ['Diagnosis cepat stroke iskemik tanpa perdarahan.', 'Intervensi medik tepat waktu untuk menurunkan disabilitas.', 'Pencegahan komplikasi dan rencana secondary prevention.'],
    patientCriteria: ['Diagnosis utama stroke infark', 'Tidak ditemukan perdarahan intrakranial pada CT scan'],
    relatedUnits: ['IGD', 'SMF Penyakit Saraf', 'Radiologi CT scan non-kontras', 'Laboratorium', 'Farmasi', 'Bangsal Rawat Inap', 'Rehabilitasi Medik bila tersedia/rujukan'],
    phases: [
      {
        id: 'isk-0',
        title: 'Hari 0 IGD',
        timeWindow: 'Hari 0',
        setting: ['IGD'],
        assessment: ['Triage FAST', 'Stabilisasi ABC', 'Last Known Well', 'GCS, vital sign, SpO2, neurologis', 'Skrining disfagia', 'NIHSS, Barthel Index, mRS'],
        diagnostics: ['Hematologi lengkap', 'GDS', 'CT scan kepala non-kontras', 'EKG'],
        treatment: [
          'Oksigen bila SpO2 <94%',
          'Head-up 30 derajat',
          'Cairan isotonik',
          'Antipiretik bila demam',
          'Kontrol tekanan darah target MAP <130 mmHg',
          'Antiplatelet',
          'Antikoagulan bila ada indikasi',
          'Statin',
          'Kontrol gula darah',
          'Pencegahan dekubitus'
        ]
      },
      {
        id: 'isk-13',
        title: 'Hari 1-3',
        timeWindow: 'Hari 1-3',
        setting: ['Rawat Inap'],
        monitoring: ['Monitoring TTV, GCS, status neurologis setiap shift'],
        treatment: ['Terapi medik dilanjutkan', 'Konsul bagian terkait bila komplikasi/komorbid', 'Head-up 30 derajat', 'Pencegahan dekubitus', 'Skrining disfagia'],
        complicationWatch: ['Deteksi pneumonia aspirasi, ISK, DVT'],
        rehabilitation: ['Mobilisasi bertahap dan latihan ROM'],
        education: ['Edukasi penyakit, prognosis, kepatuhan obat, faktor risiko stroke']
      },
      {
        id: 'isk-45',
        title: 'Hari 4-5',
        timeWindow: 'Hari 4-5',
        setting: ['Rawat Inap', 'Rehabilitasi Medik'],
        assessment: ['NIHSS, Barthel Index, mRS'],
        dischargePlanning: ['Obat pulang: antiplatelet, statin, antihipertensi sesuai indikasi', 'Jadwal kontrol', 'Rehabilitasi lanjutan/rujukan']
      }
    ],
    redFlags: ['Penurunan kesadaran progresif', 'Kecurigaan edema serebri berat', 'Kandidat trombolisis/trombektomi', 'Komplikasi yang tidak dapat ditangani'],
    referralCriteria: ['Penurunan kesadaran progresif', 'Kecurigaan edema serebri berat', 'Kandidat trombolisis/trombektomi', 'Komplikasi yang tidak dapat ditangani'],
    dischargeCriteria: ['Hemodinamik stabil', 'Tidak ada komplikasi akut', 'Edukasi selesai', 'Rencana tindak lanjut jelas'],
    qualityIndicators: [
      { id: 'isk-q1', label: 'CT scan kepala <25 menit', type: 'time', target: '<25 menit' },
      { id: 'isk-q2', label: 'Antiplatelet <48 jam', type: 'time', target: '<48 jam' },
      { id: 'isk-q3', label: 'Skrining disfagia', type: 'clinical' },
      { id: 'isk-q4', label: 'Edukasi pasien terdokumentasi', type: 'documentation' }
    ],
    guidelines: ['Clinical Pathway Internal Neurologi', 'Protokol Stroke Iskemik terbaru']
  },
  {
    id: 'radikulopati',
    title: 'Radikulopati',
    shortTitle: 'Radikulopati Servikal/Lumbal',
    category: 'spine',
    careSetting: ['IGD', 'Rawat Jalan', 'Rawat Inap', 'Rehabilitasi Medik'],
    urgency: 'urgent',
    definition: 'Sindrom nyeri, sensorik, atau motorik akibat kompresi/iritasi akar saraf spinal, terutama servikal atau lumbal.',
    goals: ['Mengurangi nyeri dan memperbaiki fungsi pasien.', 'Mengidentifikasi red flags sedini mungkin.', 'Mendorong terapi konservatif rasional sebelum intervensi invasif.'],
    patientCriteria: ['Diagnosis klinis radikulopati servikal/lumbal', 'Nyeri radikular dengan atau tanpa defisit sensorik/motorik', 'Penyebab non-traumatik'],
    relatedUnits: ['IGD / Rawat Jalan', 'SMF Saraf / Ortopedi', 'Rehabilitasi Medik', 'Radiologi X-ray; MRI bila tersedia/rujukan', 'Farmasi', 'Bangsal Rawat Inap bila perlu'],
    phases: [
      {
        id: 'rad-0',
        title: 'Hari 0 IGD/Rawat Jalan',
        timeWindow: 'Hari 0',
        setting: ['IGD', 'Rawat Jalan'],
        assessment: ['Anamnesis lokasi, penjalaran, derajat nyeri', 'Pemeriksaan neurologis segmental', 'VAS/NRS'],
        diagnostics: ['Imaging tidak rutin', 'Foto polos bila curiga kelainan struktural', 'MRI bila red flags/defisit progresif, rujuk bila tidak tersedia'],
        treatment: ['Edukasi penyakit dan prognosis', 'Analgesik bertahap: parasetamol, NSAID bila tidak kontraindikasi', 'Relaksan otot jangka pendek', 'Vitamin neurotropik']
      },
      {
        id: 'rad-13',
        title: 'Hari 1-3',
        timeWindow: 'Hari 1-3',
        setting: ['Rawat Jalan', 'Rawat Inap'],
        treatment: ['Lanjut analgesik terjadwal', 'Kortikosteroid oral jangka pendek pada indikasi selektif', 'Gabapentin/pregabalin bila nyeri neuropatik berat', 'Posisi ergonomis'],
        education: ['Edukasi aktivitas harian aman'],
        rehabilitation: ['Rehabilitasi Medik'],
        monitoring: ['Evaluasi nyeri dan fungsi']
      },
      {
        id: 'rad-26',
        title: 'Minggu 2-6',
        timeWindow: 'Minggu 2-6',
        setting: ['Rawat Jalan', 'Rehabilitasi Medik'],
        monitoring: ['Kontrol berkala', 'Evaluasi bila nyeri tidak membaik >6 minggu', 'Evaluasi defisit neurologis progresif atau gangguan fungsi berat'],
        treatment: ['Penyesuaian obat'],
        rehabilitation: ['Lanjut fisioterapi']
      }
    ],
    redFlags: ['Kelemahan progresif', 'Gangguan BAK/BAB', 'Anestesi sadel', 'Demam/penurunan berat badan'],
    inpatientCriteria: ['Nyeri berat tidak terkontrol', 'Kelemahan motorik signifikan', 'Gangguan mobilitas berat', 'Gangguan BAB/BAK'],
    referralCriteria: ['Sindrom kauda ekuina', 'Defisit neurologis progresif', 'Indikasi bedah/intervensi spinal'],
    dischargeCriteria: ['Nyeri terkendali', 'Tidak ada defisit progresif', 'Program rehabilitasi jelas', 'Edukasi selesai'],
    qualityIndicators: [
      { id: 'rad-q1', label: 'Skrining red flags terdokumentasi', type: 'documentation' },
      { id: 'rad-q2', label: 'Edukasi non-bedah sebagai lini pertama', type: 'clinical' },
      { id: 'rad-q3', label: 'Imaging rasional', type: 'rational-use' }
    ],
    guidelines: ['Clinical Pathway Internal Neurologi', 'Panduan Nyeri Neuropatik']
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    shortTitle: 'Vertigo Perifer/Sentral',
    category: 'vestibular',
    careSetting: ['IGD', 'Rawat Jalan', 'Rawat Inap', 'Rehabilitasi Medik'],
    urgency: 'urgent',
    definition: 'Sensasi ilusi pergerakan/berputar akibat gangguan vestibular perifer atau sentral.',
    goals: ['Membedakan vertigo perifer vs sentral secara cepat.', 'Mengendalikan gejala akut dengan terapi rasional.', 'Mengidentifikasi indikasi imaging/rujukan secara tepat.'],
    patientCriteria: ['Vertigo akut atau berulang', 'Dengan/tanpa mual, muntah, gangguan keseimbangan'],
    relatedUnits: ['IGD', 'Rawat Jalan', 'SMF Saraf / THT', 'Radiologi CT scan; MRI rujukan bila perlu', 'Farmasi', 'Rehabilitasi Medik bila tersedia'],
    phases: [
      {
        id: 'ver-0',
        title: 'Hari 0 IGD/Rawat Jalan',
        timeWindow: 'Hari 0',
        setting: ['IGD', 'Rawat Jalan'],
        assessment: ['Onset, durasi, pencetus posisi', 'Tinnitus, penurunan pendengaran, defisit neurologis', 'Pemeriksaan fisik, neurologis, nistagmus'],
        diagnostics: ['Imaging tidak rutin', 'CT scan kepala bila curiga vertigo sentral/stroke', 'Audiometri bila tersedia untuk kasus selektif'],
        treatment: ['Diagnosis klinis: Vertigo perifer (BPPV, vestibular neuritis, Meniere) vs Vertigo sentral (stroke)']
      },
      {
        id: 'ver-01',
        title: 'Hari 0-1',
        timeWindow: 'Hari 0-1',
        setting: ['IGD', 'Rawat Inap'],
        treatment: [
          'Vertigo perifer: edukasi dan penilaian ulang',
          'Betahistine',
          'Flunarizin',
          'Antiemetik ondansetron/domperidon',
          'Antihistamin vestibular dimenhidrinat maksimal 3-5 hari',
          'BPPV: manuver Epley/Semont',
          'Vertigo diduga sentral: stabilisasi dan CT scan kepala'
        ]
      },
      {
        id: 'ver-23',
        title: 'Hari 2-3',
        timeWindow: 'Hari 2-3',
        setting: ['Rawat Jalan', 'Rawat Inap', 'Rehabilitasi Medik'],
        monitoring: ['Evaluasi respons terapi'],
        treatment: ['Pengurangan bertahap obat vestibular suppressant'],
        rehabilitation: ['Rehabilitasi vestibular', 'Latihan keseimbangan'],
        education: ['Edukasi aktivitas aman']
      }
    ],
    redFlags: ['Defisit neurologis fokal', 'Sakit kepala hebat mendadak', 'Disartria', 'Diplopia', 'Ataksia', 'Faktor risiko stroke'],
    inpatientCriteria: ['Muntah hebat dan dehidrasi', 'Vertigo berat tidak terkontrol', 'Kecurigaan vertigo sentral', 'Monitoring TTV dan status neurologis'],
    referralCriteria: ['Vertigo sentral', 'Defisit neurologis progresif', 'Kecurigaan stroke/tumor', 'Tidak membaik setelah terapi optimal'],
    dischargeCriteria: ['Vertigo membaik', 'Mual muntah terkontrol', 'Edukasi dan rencana kontrol jelas'],
    qualityIndicators: [
      { id: 'ver-q1', label: 'Skrining red flags terdokumentasi', type: 'documentation' },
      { id: 'ver-q2', label: 'Imaging rasional', type: 'rational-use' },
      { id: 'ver-q3', label: 'Penggunaan vestibular suppressant jangka pendek', type: 'safety' }
    ],
    guidelines: ['Clinical Pathway Internal Neurologi', 'Protokol Vertigo']
  },
  {
    id: 'epilepsi',
    title: 'Epilepsi',
    shortTitle: 'Epilepsi',
    category: 'seizure',
    careSetting: ['IGD', 'Rawat Jalan', 'Rawat Inap'],
    urgency: 'emergency',
    definition: 'Gangguan otak kronik dengan kecenderungan berulang mengalami bangkitan epileptik tanpa pencetus akut yang jelas.',
    goals: ['Mengatasi bangkitan akut dengan aman.', 'Mengidentifikasi penyebab akut dan faktor risiko kekambuhan.', 'Meningkatkan kepatuhan obat anti epilepsi dan keselamatan pasien.'],
    patientCriteria: ['Kejang pertama atau epilepsi lama dengan bangkitan berulang', 'Kejang non-traumatik'],
    relatedUnits: ['IGD', 'Rawat Jalan', 'SMF Saraf', 'Radiologi CT scan; MRI rujukan bila perlu', 'Laboratorium', 'Farmasi', 'Bangsal Rawat Inap bila perlu'],
    phases: [
      {
        id: 'epi-0',
        title: 'Hari 0 IGD',
        timeWindow: 'Hari 0',
        setting: ['IGD'],
        assessment: ['Stabilisasi ABC', 'Anamnesis saksi kejang: jenis, durasi, frekuensi', 'Riwayat epilepsi dan kepatuhan obat', 'TTV, neurologis, GCS', 'Cek GDS segera'],
        treatment: ['Bila kejang aktif >5 menit: diazepam IV/rektal sesuai protokol RS', 'Oksigen bila SpO2 <94%', 'Akses IV dan cairan isotonik'],
        diagnostics: ['GDS wajib', 'Elektrolit dan darah rutin selektif', 'CT scan kepala bila kejang pertama, defisit neurologis fokal, atau penurunan kesadaran menetap']
      },
      {
        id: 'epi-01',
        title: 'Setelah Kejang Teratasi Hari 0-1',
        timeWindow: 'Hari 0-1',
        setting: ['IGD', 'Rawat Inap', 'Rawat Jalan'],
        assessment: ['Identifikasi pencetus akut: hipoglikemia, infeksi, putus obat', 'Klasifikasi bangkitan fokal/general'],
        treatment: [
          'Kejang pertama tanpa risiko tinggi: observasi dan edukasi',
          'Epilepsi/risiko tinggi: mulai OAE lini pertama sesuai tipe kejang: natrium valproat, karbamazepin, fenitoin, levetirasetam'
        ]
      },
      {
        id: 'epi-rj',
        title: 'Rawat Jalan',
        timeWindow: 'Kontrol Berkala',
        setting: ['Rawat Jalan'],
        monitoring: ['Kontrol berkala', 'Evaluasi bebas kejang'],
        treatment: ['Penyesuaian dosis OAE'],
        education: ['Edukasi kepatuhan obat, hindari pencetus, keselamatan mengemudi/pekerjaan']
      }
    ],
    inpatientCriteria: ['Status epileptikus', 'Kejang berulang dalam 24 jam', 'Gangguan kesadaran menetap', 'Komorbid berat', 'Monitoring TTV, GCS, efek samping obat'],
    referralCriteria: ['Epilepsi refrakter', 'Kecurigaan lesi struktural', 'Status epileptikus tidak terkontrol', 'Kebutuhan EEG lanjutan/bedah epilepsi'],
    dischargeCriteria: ['Kejang terkontrol', 'Kesadaran baik', 'Edukasi lengkap', 'Rencana kontrol jelas'],
    qualityIndicators: [
      { id: 'epi-q1', label: 'Cek GDS pada kejang akut', type: 'clinical' },
      { id: 'epi-q2', label: 'Tata laksana kejang >5 menit sesuai protokol', type: 'safety' },
      { id: 'epi-q3', label: 'Edukasi kepatuhan OAE terdokumentasi', type: 'documentation' }
    ],
    guidelines: ['Clinical Pathway Internal Neurologi', 'Protokol Kejang dan Epilepsi']
  }
];
