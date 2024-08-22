import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '@/stores/Auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { mustLogin: true },
      component: HomeView
    },
    {
      path: '/pegawai',
      name: 'pegawai',
      meta: { mustLogin: true },
      component: () => import('../views/PegawaiView.vue')
    },
    {
      path: '/surat-tugas',
      name: 'suratTugas',
      meta: { mustLogin: true },
      component: () => import('../views/SuratTugasView.vue')
    },
    {
      path: '/surat-perintah-perjalanan-dinas',
      name: 'sppd',
      meta: { mustLogin: true },
      component: () => import('../views/SPPDView.vue')
    },
    {
      path: '/laporan',
      name: 'laporan',
      meta: { mustLogin: true },
      component: () => import('../views/LaporanView.vue')
    },
    {
      path: '/kwitansi',
      name: 'kwitansi',
      meta: { mustLogin: true },
      component: () => import('../views/KwitansiView.vue')
    },
    {
      path: '/rekap-data',
      name: 'rekap',
      meta: { mustLogin: true },
      component: () => import('../views/RekapDataView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/RegisterView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Cek status login pengguna
  const isLoggedIn = authStore.checkLoginStatus()

  // Jika rute memerlukan login
  if (to.meta.mustLogin) {
    // Jika sudah login, lanjutkan
    // Jika belum, arahkan ke halaman login
    return isLoggedIn ? next() : next('/login')
  }

  // Jika pengguna sudah login, cegah akses ke halaman login/register dan arahkan ke beranda
  if (isLoggedIn && ['login', 'register'].includes(to.name)) {
    return next('/')
  }

  // Lanjutkan ke rute tujuan
  next()
})
export default router
