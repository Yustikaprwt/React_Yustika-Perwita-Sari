![Screenshot Tugas-1](https://user-images.githubusercontent.com/83440868/186586025-be13c831-27d8-4fb5-90ad-3e91878c6bd1.JPG)

Resume Materi KMReact - Version Control and Branch Management (Git)

3 poin utama yang dipelajari dari materi tersebut adalah:

1. Versioning dan Version Control System
Versioning berfungsi untuk mengatur versi source code suatu program. Dan Version Control System (VCS) adalah sistem yang menyimpan setiap perubahan pada sebuah berkas atau kumpulan berkas. VCS terbagi menjadi 3 tipe yaitu Single User, Centralized, dan Distributed. Dan VCS yang dipelajari pada pembelajaran ini adalah tipe Distributed yaitu GIT. GIT merupakan VCS yang paling banyak digunakan oleh para developer untuk mengembangkan software dan dapat berkolaborasi dengan developer lain. Dengan GIT kita dapat melakukan perubahan-perubahan yang disebut juga Commit. Commit sendiri berfungsi untuk merekam semua perubahan yang terjadi.Cara kerja pada GIT ada 3, yaitu Working Directory, Staging Area sebagai area yang menandai kode yang akan berubah, dan Repository sebagai tempat penyimpanan satu paket commit sesuai dengan yang telah ditandai pada staging area.

2. Inspecting Repository
Reposetory merupakan penyimpanan file proyek. Pada repository file dapat disimpan secara lokal yaitu pada komputer, dan juga pada server. Pada repository kita dapat melakukan beberapa perintah seperti GIT LOG untuk melihat feature versi sebelumnya, GIT CHECKOUT untuk membuat feature baru atau memindahkan feature versi sebelumnya menjadi feature baru, GIT RESET untuk mengembalikan titik-titik tertentu yaitu --soft dan --hard. Yang dimana --soft merupakan perubahan yang terjadi dan akan selalu di tracking pada staging area, dan --hard tidak ter tracking tetapi tetap terdapat di working directory. 

3. Branch
Branch atau dapat diartikan juga cabang atau jembatan antar masing-masing commit. Branch digunakan untuk mengembangkan secara terpisah. Dengan nama default "master", ketika membuat suatu commit, maka akan terdapat branch master yang menuju commit terakhir yang telah dibuat, dan setiap kali melakukan suatu commit, maka branch saat ini akan bergerak secara otomatis ke branch lainnya dan juga repository menggunakan pull request. Selain default dari branch yaitu master, alur kerja dari branch juga dapat sebagai develop dan feature.
