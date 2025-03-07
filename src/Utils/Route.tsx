import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';

const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'Home',
        description: 'Halaman utama yang menampilkan gambaran lengkap mengenai agensi talent kami, termasuk carousel portfolio, informasi layanan, dan berita terbaru.'
    },
    {
        path: '/about',
        element: <About />,
        title: 'About',
        description: 'Halaman About kami memberikan informasi tentang sejarah, misi, dan nilai-nilai perusahaan, serta kisah perjalanan kami dalam menghubungkan talenta terbaik dengan peluang karier.'
    },
    {
        path: '/contact',
        element: <Contact />,
        title: 'Contact',
        description: 'Halaman Contact menyediakan informasi untuk menghubungi kami, termasuk formulir kontak dan tombol WhatsApp untuk pertanyaan atau konsultasi langsung dengan tim kami.'
    },
    {
        path: '/service',
        element: <Services />,
        title: 'Service',
        description: 'Halaman layanan menjelaskan berbagai paket dan solusi yang kami tawarkan untuk mendukung pengembangan karier dan memenuhi kebutuhan perusahaan dalam proses rekrutmen.'
    },
];

export default routes;
