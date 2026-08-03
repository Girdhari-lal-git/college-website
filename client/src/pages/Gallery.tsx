
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import LazyImage from '@/components/LazyImage';
import BreadCrumb from '@/components/BreadCrumb';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
    {
    "id": "41",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697963/30_eqfqbt.jpg",
    "alt": "30 - Campus facility at PIET Jaipur",
    "title": "30",
    "category": "campus"
  },
  {
    "id": "42",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697962/29_qkdpcs.jpg",
    "alt": "29 - Campus facility at PIET Jaipur",
    "title": "29",
    "category": "campus"
  },
  {
    "id": "43",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697961/28_wz9dkm.jpg",
    "alt": "28 - Campus facility at PIET Jaipur",
    "title": "28",
    "category": "campus"
  },
  {
    "id": "44",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697960/27_br8u7a.jpg",
    "alt": "27 - Campus facility at PIET Jaipur",
    "title": "27",
    "category": "campus"
  },
  {
    "id": "45",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697959/26_d45olb.jpg",
    "alt": "26 - Campus facility at PIET Jaipur",
    "title": "26",
    "category": "campus"
  },
  {
    "id": "46",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697958/25_ahq6ws.jpg",
    "alt": "25 - Campus facility at PIET Jaipur",
    "title": "25",
    "category": "campus"
  },
  {
    "id": "47",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697958/24_yinowm.jpg",
    "alt": "24 - Campus facility at PIET Jaipur",
    "title": "24",
    "category": "campus"
  },
  {
    "id": "48",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697957/23_ehn77t.jpg",
    "alt": "23 - Campus facility at PIET Jaipur",
    "title": "23",
    "category": "campus"
  },
  {
    "id": "49",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697956/22_ftvjg8.jpg",
    "alt": "22 - Campus facility at PIET Jaipur",
    "title": "22",
    "category": "campus"
  },
  {
    "id": "50",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697955/21_dnbezo.jpg",
    "alt": "21 - Campus facility at PIET Jaipur",
    "title": "21",
    "category": "campus"
  },
  {
    "id": "51",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697954/20_ioycqm.jpg",
    "alt": "20 - Campus facility at PIET Jaipur",
    "title": "20",
    "category": "campus"
  },
  {
    "id": "52",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697952/DSC02326_hmcxpb.jpg",
    "alt": "Dsc 02326 - Campus facility at PIET Jaipur",
    "title": "Dsc 02326",
    "category": "campus"
  },
  {
    "id": "53",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697953/19_hdaqng.jpg",
    "alt": "19 - Campus facility at PIET Jaipur",
    "title": "19",
    "category": "campus"
  },
  {
    "id": "54",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697952/18_eg9o39.jpg",
    "alt": "18 - Campus facility at PIET Jaipur",
    "title": "18",
    "category": "campus"
  },
  {
    "id": "55",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697951/DSC02277_cqoyaw.jpg",
    "alt": "Dsc 02277 - Campus facility at PIET Jaipur",
    "title": "Dsc 02277",
    "category": "campus"
  },
  {
    "id": "56",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697951/17_hh7zar.jpg",
    "alt": "17 - Campus facility at PIET Jaipur",
    "title": "17",
    "category": "campus"
  },
  {
    "id": "57",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697950/DSC02276_gzbobk.jpg",
    "alt": "Dsc 02276 - Campus facility at PIET Jaipur",
    "title": "Dsc 02276",
    "category": "campus"
  },
  {
    "id": "58",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697950/16_fwxqby.jpg",
    "alt": "16 - Campus facility at PIET Jaipur",
    "title": "16",
    "category": "campus"
  },
  {
    "id": "59",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697913/DSC02395_rjgipg.jpg",
    "alt": "Dsc 02395 - Campus facility at PIET Jaipur",
    "title": "Dsc 02395",
    "category": "campus"
  },
  {
    "id": "60",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697912/DSC02398_psjzwx.jpg",
    "alt": "Dsc 02398 - Campus facility at PIET Jaipur",
    "title": "Dsc 02398",
    "category": "campus"
  },
  {
    "id": "61",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697911/DSC02391_jjgvug.jpg",
    "alt": "Dsc 02391 - Campus facility at PIET Jaipur",
    "title": "Dsc 02391",
    "category": "campus"
  },
  {
    "id": "62",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697910/DSC02447_fb2jj3.jpg",
    "alt": "Dsc 02447 - Campus facility at PIET Jaipur",
    "title": "Dsc 02447",
    "category": "campus"
  },
  {
    "id": "63",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697906/DSC02439_d4ovqn.jpg",
    "alt": "Dsc 02439 - Campus facility at PIET Jaipur",
    "title": "Dsc 02439",
    "category": "campus"
  },
  {
    "id": "64",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697905/DSC02445_y7casp.jpg",
    "alt": "Dsc 02445 - Campus facility at PIET Jaipur",
    "title": "Dsc 02445",
    "category": "campus"
  },
  {
    "id": "65",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697904/DSC02420_pywihi.jpg",
    "alt": "Dsc 02420 - Campus facility at PIET Jaipur",
    "title": "Dsc 02420",
    "category": "campus"
  },
  {
    "id": "66",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697902/DSC02436_thfcuy.jpg",
    "alt": "Dsc 02436 - Campus facility at PIET Jaipur",
    "title": "Dsc 02436",
    "category": "campus"
  },
  {
    "id": "67",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697901/DSC02411_svjz20.jpg",
    "alt": "Dsc 02411 - Campus facility at PIET Jaipur",
    "title": "Dsc 02411",
    "category": "campus"
  },
  {
    "id": "68",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697899/DSC02374_lqj0ko.jpg",
    "alt": "Dsc 02374 - Campus facility at PIET Jaipur",
    "title": "Dsc 02374",
    "category": "campus"
  },
  {
    "id": "69",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697899/DSC02416_zwpb60.jpg",
    "alt": "Dsc 02416 - Campus facility at PIET Jaipur",
    "title": "Dsc 02416",
    "category": "campus"
  },
  {
    "id": "70",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697897/DSC02413_itvp3n.jpg",
    "alt": "Dsc 02413 - Campus facility at PIET Jaipur",
    "title": "Dsc 02413",
    "category": "campus"
  },
  {
    "id": "71",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697894/DSC02343_tkx8kn.jpg",
    "alt": "Dsc 02343 - Campus facility at PIET Jaipur",
    "title": "Dsc 02343",
    "category": "campus"
  },
  {
    "id": "72",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697893/DSC02337_h4quth.jpg",
    "alt": "Dsc 02337 - Campus facility at PIET Jaipur",
    "title": "Dsc 02337",
    "category": "campus"
  },
  {
    "id": "73",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696423/c3_ao4hhy.png",
    "alt": "C 3 - Campus facility at PIET Jaipur",
    "title": "C 3",
    "category": "campus"
  },
  {
    "id": "74",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696329/c10_qs8n6z.png",
    "alt": "C 10 - Campus facility at PIET Jaipur",
    "title": "C 10",
    "category": "campus"
  },
  {
    "id": "75",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696328/c12_z5vfi3.jpg",
    "alt": "C 12 - Campus facility at PIET Jaipur",
    "title": "C 12",
    "category": "campus"
  },
  {
    "id": "76",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696328/c9_bkogif.jpg",
    "alt": "C 9 - Campus facility at PIET Jaipur",
    "title": "C 9",
    "category": "campus"
  },
  {
    "id": "77",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696328/c11_x4afcn.jpg",
    "alt": "C 11 - Campus facility at PIET Jaipur",
    "title": "C 11",
    "category": "campus"
  },
  {
    "id": "78",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696328/c6_dtuuur.jpg",
    "alt": "C 6 - Campus facility at PIET Jaipur",
    "title": "C 6",
    "category": "campus"
  },
  {
    "id": "79",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696327/c7_hxdrhz.png",
    "alt": "C 7 - Campus facility at PIET Jaipur",
    "title": "C 7",
    "category": "campus"
  },
  {
    "id": "80",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696327/c8_u1mkby.png",
    "alt": "C 8 - Campus facility at PIET Jaipur",
    "title": "C 8",
    "category": "campus"
  },
  {
    "id": "81",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696327/c5_gp4c7o.jpg",
    "alt": "C 5 - Campus facility at PIET Jaipur",
    "title": "C 5",
    "category": "campus"
  },
  {
    "id": "82",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696326/c4_dehuug.jpg",
    "alt": "C 4 - Campus facility at PIET Jaipur",
    "title": "C 4",
    "category": "campus"
  },
  {
    "id": "83",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696326/c2_mifqae.png",
    "alt": "C 2 - Campus facility at PIET Jaipur",
    "title": "C 2",
    "category": "campus"
  },
  {
    "id": "84",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696325/c1_o1oedb.jpg",
    "alt": "C 1 - Campus facility at PIET Jaipur",
    "title": "C 1",
    "category": "campus"
  },
  {
    "id": "85",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696325/Web_Banner_2_ebrbev.jpg",
    "alt": "Web_Banner_ 2 - Campus facility at PIET Jaipur",
    "title": "Web_Banner_ 2",
    "category": "campus"
  },
  {
    "id": "86",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696141/NAACGrade_vbjfop.jpg",
    "alt": "Naacgrade - Campus facility at PIET Jaipur",
    "title": "Naacgrade",
    "category": "campus"
  },
  {
    "id": "87",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784696141/MainBuildingSideview_nku7jo.jpg",
    "alt": "Main Building Sideview - Campus facility at PIET Jaipur",
    "title": "Main Building Sideview",
    "category": "campus"
  },
  {
    "id": "88",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695550/MainBuilding1_uelfkf.jpg",
    "alt": "Main Building 1 - Campus facility at PIET Jaipur",
    "title": "Main Building 1",
    "category": "campus"
  },
  {
    "id": "89",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695544/AcademicblockB2_qswvid.jpg",
    "alt": "Academicblock B 2 - Campus facility at PIET Jaipur",
    "title": "Academicblock B 2",
    "category": "campus"
  },
  {
    "id": "90",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695544/AdministrativeBlock_clryma.jpg",
    "alt": "Administrative Block - Campus facility at PIET Jaipur",
    "title": "Administrative Block",
    "category": "campus"
  },
  {
    "id": "91",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/TPO1_fr5pdf.jpg",
    "alt": "Tpo 1 - Campus facility at PIET Jaipur",
    "title": "Tpo 1",
    "category": "campus"
  },
  {
    "id": "92",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/AcademicblockB1_lju0z6.jpg",
    "alt": "Academicblock B 1 - Campus facility at PIET Jaipur",
    "title": "Academicblock B 1",
    "category": "campus"
  },
  {
    "id": "93",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/PBIC2_bh28e2.jpg",
    "alt": "Pbic 2 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic 2",
    "category": "research"
  },
  {
    "id": "94",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/MainBuilding2_zh41p7.jpg",
    "alt": "Main Building 2 - Campus facility at PIET Jaipur",
    "title": "Main Building 2",
    "category": "campus"
  },
  {
    "id": "95",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/VollyballGround1_n9cvc1.jpg",
    "alt": "Vollyball Ground 1 - Sports facility at PIET Jaipur",
    "title": "Vollyball Ground 1",
    "category": "sports"
  },
  {
    "id": "96",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695543/Research_Innovation1_vbo6ya.jpg",
    "alt": "Research_Innovation 1 - Research and innovation activity at PIET Jaipur",
    "title": "Research_Innovation 1",
    "category": "research"
  },
  {
    "id": "97",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695542/mainBuilding2_cr8xau.jpg",
    "alt": "Main Building 2 - Campus facility at PIET Jaipur",
    "title": "Main Building 2",
    "category": "campus"
  },
  {
    "id": "98",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695540/HostelBuilding1_b6gphx.jpg",
    "alt": "Hostel Building 1 - Campus facility at PIET Jaipur",
    "title": "Hostel Building 1",
    "category": "campus"
  },
  {
    "id": "99",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695540/MainBuilding_xcbkcl.jpg",
    "alt": "Main Building - Campus facility at PIET Jaipur",
    "title": "Main Building",
    "category": "campus"
  },
  {
    "id": "100",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695540/PBIC1_yii7yp.jpg",
    "alt": "Pbic 1 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic 1",
    "category": "research"
  },
  {
    "id": "101",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695539/Centrallibrary2_mf3vxb.jpg",
    "alt": "Centrallibrary 2 - Library facility at PIET Jaipur",
    "title": "Centrallibrary 2",
    "category": "library"
  },
  {
    "id": "102",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695539/ground1_aiayis.jpg",
    "alt": "Ground 1 - Sports facility at PIET Jaipur",
    "title": "Ground 1",
    "category": "sports"
  },
  {
    "id": "103",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695539/CentralLibrary3_xgew0k.jpg",
    "alt": "Central Library 3 - Library facility at PIET Jaipur",
    "title": "Central Library 3",
    "category": "library"
  },
  {
    "id": "104",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695539/Centrallibrary1_kq5rm3.jpg",
    "alt": "Centrallibrary 1 - Library facility at PIET Jaipur",
    "title": "Centrallibrary 1",
    "category": "library"
  },
  {
    "id": "105",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784695539/basketballground2_eqgnxv.jpg",
    "alt": "Basketballground 2 - Sports facility at PIET Jaipur",
    "title": "Basketballground 2",
    "category": "sports"
  },
  {
    "id": "106",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955016/icsicst3_gnofl7.jpg",
    "alt": "Icsicst 3 - Research and innovation activity at PIET Jaipur",
    "title": "Icsicst 3",
    "category": "research"
  },
  {
    "id": "107",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955010/students2_fxjtat.jpg",
    "alt": "Students 2 - Student activity at PIET Jaipur",
    "title": "Students 2",
    "category": "activities"
  },
  {
    "id": "108",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955011/yogaday2_oedee5.jpg",
    "alt": "Yogaday 2 - Campus event at PIET Jaipur",
    "title": "Yogaday 2",
    "category": "events"
  },
  {
    "id": "109",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955010/rvisit2_wpdc4a.jpg",
    "alt": "Rvisit 2 - Student activity at PIET Jaipur",
    "title": "Rvisit 2",
    "category": "activities"
  },
  {
    "id": "110",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955010/rvisit1_u8gt2j.jpg",
    "alt": "Rvisit 1 - Student activity at PIET Jaipur",
    "title": "Rvisit 1",
    "category": "activities"
  },
  {
    "id": "111",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955009/pbic-startup1_nra7lq.jpg",
    "alt": "Pbic Startup 1 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Startup 1",
    "category": "research"
  },
  {
    "id": "112",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955009/pbic-startup3_gf10zf.jpg",
    "alt": "Pbic Startup 3 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Startup 3",
    "category": "research"
  },
  {
    "id": "113",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955009/pbic-ing2_k00z6w.jpg",
    "alt": "Pbic Ing 2 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Ing 2",
    "category": "research"
  },
  {
    "id": "114",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955008/icsicst1_fsacyw.jpg",
    "alt": "Icsicst 1 - Research and innovation activity at PIET Jaipur",
    "title": "Icsicst 1",
    "category": "research"
  },
  {
    "id": "115",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955008/pbic-ing1_ov0yso.jpg",
    "alt": "Pbic Ing 1 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Ing 1",
    "category": "research"
  },
  {
    "id": "116",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955008/momento-guest1_bzc4xy.jpg",
    "alt": "Momento Guest 1 - Campus event at PIET Jaipur",
    "title": "Momento Guest 1",
    "category": "events"
  },
  {
    "id": "117",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955008/lamp-lighting1_volnwm.jpg",
    "alt": "Lamp Lighting 1 - Campus event at PIET Jaipur",
    "title": "Lamp Lighting 1",
    "category": "events"
  },
  {
    "id": "118",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765955008/ieee-session1_rna08a.jpg",
    "alt": "Ieee Session 1 - Research and innovation activity at PIET Jaipur",
    "title": "Ieee Session 1",
    "category": "research"
  },
  {
    "id": "119",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954992/icracs4_tqvwtx.jpg",
    "alt": "Icracs 4 - Research and innovation activity at PIET Jaipur",
    "title": "Icracs 4",
    "category": "research"
  },
  {
    "id": "120",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954958/ICNCDA_2025_23052025_119_vim5b2.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 119 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 119",
    "category": "research"
  },
  {
    "id": "121",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954957/icracs3_dt1e89.jpg",
    "alt": "Icracs 3 - Research and innovation activity at PIET Jaipur",
    "title": "Icracs 3",
    "category": "research"
  },
  {
    "id": "122",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954957/icracs2_hlqkvn.jpg",
    "alt": "Icracs 2 - Research and innovation activity at PIET Jaipur",
    "title": "Icracs 2",
    "category": "research"
  },
  {
    "id": "123",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954957/icracs1_bjuadg.jpg",
    "alt": "Icracs 1 - Research and innovation activity at PIET Jaipur",
    "title": "Icracs 1",
    "category": "research"
  },
  {
    "id": "124",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954956/ICNCDA_2025_23052025_112_h4obar.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 112 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 112",
    "category": "research"
  },
  {
    "id": "125",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954956/guest-session1_f4ospi.jpg",
    "alt": "Guest Session 1 - Campus event at PIET Jaipur",
    "title": "Guest Session 1",
    "category": "events"
  },
  {
    "id": "126",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954956/farewel8_dzqfkd.jpg",
    "alt": "Farewel 8 - Campus event at PIET Jaipur",
    "title": "Farewel 8",
    "category": "events"
  },
  {
    "id": "127",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954956/ICNCDA_2025_23052025_91_zfjbe0.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 91 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 91",
    "category": "research"
  },
  {
    "id": "128",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954955/farewel13_xpihyr.jpg",
    "alt": "Farewel 13 - Campus event at PIET Jaipur",
    "title": "Farewel 13",
    "category": "events"
  },
  {
    "id": "129",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954955/farewel11_wtypme.jpg",
    "alt": "Farewel 11 - Campus event at PIET Jaipur",
    "title": "Farewel 11",
    "category": "events"
  },
  {
    "id": "130",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954955/farewel10_wzzr7j.jpg",
    "alt": "Farewel 10 - Campus event at PIET Jaipur",
    "title": "Farewel 10",
    "category": "events"
  },
  {
    "id": "131",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954955/farewel6_udlsba.jpg",
    "alt": "Farewel 6 - Campus event at PIET Jaipur",
    "title": "Farewel 6",
    "category": "events"
  },
  {
    "id": "132",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/farewel3_prwldo.jpg",
    "alt": "Farewel 3 - Campus event at PIET Jaipur",
    "title": "Farewel 3",
    "category": "events"
  },
  {
    "id": "133",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/farewel5_txcjat.jpg",
    "alt": "Farewel 5 - Campus event at PIET Jaipur",
    "title": "Farewel 5",
    "category": "events"
  },
  {
    "id": "134",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/counciling1_m0ggo8.jpg",
    "alt": "Counciling 1 - Student activity at PIET Jaipur",
    "title": "Counciling 1",
    "category": "activities"
  },
  {
    "id": "135",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/farewel2_kpzgd0.jpg",
    "alt": "Farewel 2 - Campus event at PIET Jaipur",
    "title": "Farewel 2",
    "category": "events"
  },
  {
    "id": "136",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/fairwel1_t1gter.jpg",
    "alt": "Fairwel 1 - Campus event at PIET Jaipur",
    "title": "Fairwel 1",
    "category": "events"
  },
  {
    "id": "137",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/yogaday1_sbrdtc.jpg",
    "alt": "Yogaday 1 - Campus event at PIET Jaipur",
    "title": "Yogaday 1",
    "category": "events"
  },
  {
    "id": "138",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954954/dg-speech1_iihzyo.jpg",
    "alt": "Dg Speech 1 - Campus event at PIET Jaipur",
    "title": "Dg Speech 1",
    "category": "events"
  },
  {
    "id": "139",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954953/audience1_rt45s7.jpg",
    "alt": "Audience 1 - Campus event at PIET Jaipur",
    "title": "Audience 1",
    "category": "events"
  },
  {
    "id": "140",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954953/students4_rmwaoi.jpg",
    "alt": "Students 4 - Student activity at PIET Jaipur",
    "title": "Students 4",
    "category": "activities"
  },
  {
    "id": "141",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954953/students3_rhuhpn.jpg",
    "alt": "Students 3 - Student activity at PIET Jaipur",
    "title": "Students 3",
    "category": "activities"
  },
  {
    "id": "142",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954952/student1_ppafvd.jpg",
    "alt": "Student 1 - Student activity at PIET Jaipur",
    "title": "Student 1",
    "category": "activities"
  },
  {
    "id": "143",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954952/rvisit3_ybzv2g.jpg",
    "alt": "Rvisit 3 - Student activity at PIET Jaipur",
    "title": "Rvisit 3",
    "category": "activities"
  },
  {
    "id": "144",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954952/pbic-ing3_gwgjvt.jpg",
    "alt": "Pbic Ing 3 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Ing 3",
    "category": "research"
  },
  {
    "id": "145",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954952/pbic-startup2_y6wb1j.jpg",
    "alt": "Pbic Startup 2 - Research and innovation activity at PIET Jaipur",
    "title": "Pbic Startup 2",
    "category": "research"
  },
  {
    "id": "146",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954952/icsicst2_zeooki.jpg",
    "alt": "Icsicst 2 - Research and innovation activity at PIET Jaipur",
    "title": "Icsicst 2",
    "category": "research"
  },
  {
    "id": "147",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954951/nss-ing_ceknhp.jpg",
    "alt": "Nss Ing - Student activity at PIET Jaipur",
    "title": "Nss Ing",
    "category": "activities"
  },
  {
    "id": "148",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954951/ICNCDA_2025_23052025_126_hdtd8x.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 126 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 126",
    "category": "research"
  },
  {
    "id": "149",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954951/icracs5_vkvnrp.jpg",
    "alt": "Icracs 5 - Research and innovation activity at PIET Jaipur",
    "title": "Icracs 5",
    "category": "research"
  },
  {
    "id": "150",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954951/ieee-group1_wugroo.jpg",
    "alt": "Ieee Group 1 - Research and innovation activity at PIET Jaipur",
    "title": "Ieee Group 1",
    "category": "research"
  },
  {
    "id": "151",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954951/ICNCDA_2025_23052025_118_sbtnlw.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 118 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 118",
    "category": "research"
  },
  {
    "id": "152",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954950/farewel9_vb2ovy.jpg",
    "alt": "Farewel 9 - Campus event at PIET Jaipur",
    "title": "Farewel 9",
    "category": "events"
  },
  {
    "id": "153",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954950/ICNCDA_2025_23052025_108_lkbdqf.jpg",
    "alt": "Icncda_ 2025_ 23052025_ 108 - Research and innovation activity at PIET Jaipur",
    "title": "Icncda_ 2025_ 23052025_ 108",
    "category": "research"
  },
  {
    "id": "154",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954950/goomer1_hn0ssf.jpg",
    "alt": "Goomer 1 - Student activity at PIET Jaipur",
    "title": "Goomer 1",
    "category": "activities"
  },
  {
    "id": "155",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954950/momento-guest2_i91eq1.jpg",
    "alt": "Momento Guest 2 - Campus event at PIET Jaipur",
    "title": "Momento Guest 2",
    "category": "events"
  },
  {
    "id": "156",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954950/farewel12_dppe6n.jpg",
    "alt": "Farewel 12 - Campus event at PIET Jaipur",
    "title": "Farewel 12",
    "category": "events"
  },
  {
    "id": "157",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954949/farewel4_pqp28f.jpg",
    "alt": "Farewel 4 - Campus event at PIET Jaipur",
    "title": "Farewel 4",
    "category": "events"
  },
  {
    "id": "158",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954949/ieee-welcome_wtxeaq.jpg",
    "alt": "Ieee Welcome - Research and innovation activity at PIET Jaipur",
    "title": "Ieee Welcome",
    "category": "research"
  },
  {
    "id": "159",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954949/independence-day1_k6fwia.jpg",
    "alt": "Independence Day 1 - Campus event at PIET Jaipur",
    "title": "Independence Day 1",
    "category": "events"
  },
  {
    "id": "160",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954949/guest-session2_rffk0x.jpg",
    "alt": "Guest Session 2 - Campus event at PIET Jaipur",
    "title": "Guest Session 2",
    "category": "events"
  },
  {
    "id": "161",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1765954949/farewel7_vzpbh9.jpg",
    "alt": "Farewel 7 - Campus event at PIET Jaipur",
    "title": "Farewel 7",
    "category": "events"
  },
  {
    "id": "1",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/library_ehcajd.png",
    "alt": "Library - Library facility at PIET Jaipur",
    "title": "Library",
    "category": "library"
  },
  {
    "id": "2",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781127/outdoor_nlgigp.jpg",
    "alt": "Outdoor - Sports facility at PIET Jaipur",
    "title": "Outdoor",
    "category": "sports"
  },
  {
    "id": "3",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/labs_rta3lp.png",
    "alt": "Labs - Laboratory facility at PIET Jaipur",
    "title": "Labs",
    "category": "labs"
  },
  {
    "id": "4",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/idea1_ajixhf.png",
    "alt": "Idea 1 - Research and innovation activity at PIET Jaipur",
    "title": "Idea 1",
    "category": "research"
  },
  {
    "id": "5",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/ict_d0iliz.png",
    "alt": "Ict - Research and innovation activity at PIET Jaipur",
    "title": "Ict",
    "category": "research"
  },
  {
    "id": "6",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/indoor_demjsv.png",
    "alt": "Indoor - Sports facility at PIET Jaipur",
    "title": "Indoor",
    "category": "sports"
  },
  {
    "id": "7",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781126/audi_dkxnal.png",
    "alt": "Audi - Campus facility at PIET Jaipur",
    "title": "Audi",
    "category": "campus"
  },
  {
    "id": "8",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/hostel_mu39mf.png",
    "alt": "Hostel - Campus facility at PIET Jaipur",
    "title": "Hostel",
    "category": "campus"
  },
  {
    "id": "9",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/parking_bscigh.png",
    "alt": "Parking - Campus facility at PIET Jaipur",
    "title": "Parking",
    "category": "campus"
  },
  {
    "id": "10",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/transport_oorn8y.png",
    "alt": "Transport - Campus facility at PIET Jaipur",
    "title": "Transport",
    "category": "campus"
  },
  {
    "id": "11",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/store_eybzc8.png",
    "alt": "Store - Campus facility at PIET Jaipur",
    "title": "Store",
    "category": "campus"
  },
  {
    "id": "12",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/gym_gdfxhj.png",
    "alt": "Gym - Sports facility at PIET Jaipur",
    "title": "Gym",
    "category": "sports"
  },
  {
    "id": "13",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/versatile_deilaa.png",
    "alt": "Versatile - Campus facility at PIET Jaipur",
    "title": "Versatile",
    "category": "campus"
  },
  {
    "id": "14",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781125/disable_enak5k.png",
    "alt": "Disable - Campus facility at PIET Jaipur",
    "title": "Disable",
    "category": "campus"
  },
  {
    "id": "15",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781124/generator_ahjy2h.png",
    "alt": "Generator - Campus facility at PIET Jaipur",
    "title": "Generator",
    "category": "campus"
  },
  {
    "id": "16",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781124/cafeteria_vp7qtq.png",
    "alt": "Cafeteria - Campus facility at PIET Jaipur",
    "title": "Cafeteria",
    "category": "campus"
  },
  {
    "id": "17",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781124/medical_udisvq.png",
    "alt": "Medical - Campus facility at PIET Jaipur",
    "title": "Medical",
    "category": "campus"
  },
  {
    "id": "18",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781124/parlour_yxhtdl.png",
    "alt": "Parlour - Campus facility at PIET Jaipur",
    "title": "Parlour",
    "category": "campus"
  },
  {
    "id": "19",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784781124/rainwater_lmhl4t.png",
    "alt": "Rainwater - Campus facility at PIET Jaipur",
    "title": "Rainwater",
    "category": "campus"
  },
  {
    "id": "20",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784699512/main-sample.png",
    "alt": "Main Sample - Campus facility at PIET Jaipur",
    "title": "Main Sample",
    "category": "campus"
  },
  {
    "id": "21",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697981/DSC02275_rwfzu0.jpg",
    "alt": "Dsc 02275 - Campus facility at PIET Jaipur",
    "title": "Dsc 02275",
    "category": "campus"
  },
  {
    "id": "22",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697979/Day3Cul4_ywyl75.jpg",
    "alt": "Day 3Cul 4 - Campus event at PIET Jaipur",
    "title": "Day 3Cul 4",
    "category": "events"
  },
  {
    "id": "23",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697978/CSAY3_yuuc74.jpg",
    "alt": "Csay 3 - Campus event at PIET Jaipur",
    "title": "Csay 3",
    "category": "events"
  },
  {
    "id": "24",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697977/Conference_b66yl9.jpg",
    "alt": "Conference - Research and innovation activity at PIET Jaipur",
    "title": "Conference",
    "category": "research"
  },
  {
    "id": "25",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697976/20260216_203633_af8vof.jpg",
    "alt": "20260216_ 203633 - Campus facility at PIET Jaipur",
    "title": "20260216_ 203633",
    "category": "campus"
  },
  {
    "id": "26",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697976/arohan2k25_-_RAKSHITA_MEHTA_PIET22CS135_fu6uuo.jpg",
    "alt": "Arohan 2K 25_ _Rakshita_Mehta_Piet 22Cs 135 - Campus event at PIET Jaipur",
    "title": "Arohan 2K 25_ _Rakshita_Mehta_Piet 22Cs 135",
    "category": "events"
  },
  {
    "id": "27",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697975/20260216_203631_ptj6az.jpg",
    "alt": "20260216_ 203631 - Campus facility at PIET Jaipur",
    "title": "20260216_ 203631",
    "category": "campus"
  },
  {
    "id": "28",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697975/20260216_203629_0_yhbjwt.jpg",
    "alt": "20260216_ 203629_ 0 - Campus facility at PIET Jaipur",
    "title": "20260216_ 203629_ 0",
    "category": "campus"
  },
  {
    "id": "29",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697973/5555_xnitha.jpg",
    "alt": "5555 - Campus facility at PIET Jaipur",
    "title": "5555",
    "category": "campus"
  },
  {
    "id": "30",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697972/4444_dvnwux.jpg",
    "alt": "4444 - Campus facility at PIET Jaipur",
    "title": "4444",
    "category": "campus"
  },
  {
    "id": "31",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697971/3333_xjdrie.jpg",
    "alt": "3333 - Campus facility at PIET Jaipur",
    "title": "3333",
    "category": "campus"
  },
  {
    "id": "32",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697970/2222_xyrwwg.jpg",
    "alt": "2222 - Campus facility at PIET Jaipur",
    "title": "2222",
    "category": "campus"
  },
  {
    "id": "33",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697969/2024_12_28_23_33_IMG_7991_kqc5uu.jpg",
    "alt": "2024_ 12_ 28_ 23_ 33_Img_ 7991 - Campus facility at PIET Jaipur",
    "title": "2024_ 12_ 28_ 23_ 33_Img_ 7991",
    "category": "campus"
  },
  {
    "id": "34",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697969/37_hmho30.jpg",
    "alt": "37 - Campus facility at PIET Jaipur",
    "title": "37",
    "category": "campus"
  },
  {
    "id": "35",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697968/36_qfdkqv.jpg",
    "alt": "36 - Campus facility at PIET Jaipur",
    "title": "36",
    "category": "campus"
  },
  {
    "id": "36",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697967/35_pehaca.jpg",
    "alt": "35 - Campus facility at PIET Jaipur",
    "title": "35",
    "category": "campus"
  },
  {
    "id": "37",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697966/34_yzv7ft.jpg",
    "alt": "34 - Campus facility at PIET Jaipur",
    "title": "34",
    "category": "campus"
  },
  {
    "id": "38",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697965/33_qqnqol.jpg",
    "alt": "33 - Campus facility at PIET Jaipur",
    "title": "33",
    "category": "campus"
  },
  {
    "id": "39",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697964/32_hhdyur.jpg",
    "alt": "32 - Campus facility at PIET Jaipur",
    "title": "32",
    "category": "campus"
  },
  {
    "id": "40",
    "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/v1784697963/31_yrcevn.jpg",
    "alt": "31 - Campus facility at PIET Jaipur",
    "title": "31",
    "category": "campus"
  },
];


const categories = [
  { id: 'all', name: 'All Images', icon: 'fas fa-layer-group' },
  { id: 'campus', name: 'Campus Buildings', icon: 'fas fa-building' },
  { id: 'library', name: 'Library', icon: 'fas fa-book' },
  { id: 'labs', name: 'Laboratories', icon: 'fas fa-flask' },
  { id: 'research', name: 'Research & Development', icon: 'fas fa-microscope' },
  { id: 'sports', name: 'Sports Grounds', icon: 'fas fa-futbol' },
  { id: 'events', name: 'Annual Events', icon: 'fas fa-calendar-alt' },
  { id: 'activities', name: 'Activities', icon: 'fas fa-users' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const imageCount = filteredImages.length;

  const openModal = (image: GalleryImage) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AccessibilityFeatures />
      <Header />

      <BreadCrumb
        title="Campus Gallery"
        description="Explore the beautiful campus, modern facilities, and vibrant student life at Poornima Institute of Engineering & Technology"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", isCurrent: true },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              <i className="fas fa-images mr-3"></i>
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                  }`}
                >
                  <i className={`${category.icon} text-sm`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-4xl font-bold text-primary mb-3 flex items-center justify-center lg:justify-start">
                <i className={`${activeCategoryData?.icon} mr-4 text-secondary`}></i>
                {activeCategoryData?.name}
              </h3>
              <p className="text-lg text-neutral-600 max-w-2xl">
                {activeCategory === 'campus' && 'Modern architecture and state-of-the-art academic facilities designed for excellence in education'}
                {activeCategory === 'library' && 'World-class learning resources and digital facilities for comprehensive academic support'}
                {activeCategory === 'labs' && 'Advanced laboratory facilities equipped with cutting-edge technology and instruments'}
                {activeCategory === 'research' && 'Innovation centers fostering research, development, and entrepreneurial thinking'}
                {activeCategory === 'sports' && 'Comprehensive sports and recreational facilities promoting physical wellness'}
                {activeCategory === 'events' && 'Vibrant campus life with annual celebrations, festivals, and cultural events'}
                {activeCategory === 'activities' && 'Rich academic and co-curricular activities enhancing overall student development'}
                {activeCategory === 'all' && 'Complete visual journey through our beautiful campus and vibrant academic community'}
              </p>
            </div>
            <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">{imageCount}</div>
                <div className="text-sm font-medium opacity-90">Images</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h4>
                    <div className="flex items-center text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <i className={`${categories.find(cat => cat.id === image.category)?.icon} mr-2`}></i>
                      <span className="capitalize">{image.category.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <i className="fas fa-images text-6xl text-neutral-400 mb-6"></i>
              <h3 className="text-xl font-bold text-neutral-600 mb-3">No Images Found</h3>
              <p className="text-neutral-500">No images are available in this category at the moment.</p>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            
            <div className="relative">
              <LazyImage
                src={modalImage.src}
                alt={modalImage.alt}
                className="w-full max-h-[75vh] object-contain bg-neutral-50"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{modalImage.title}</h3>
                <div className="flex items-center text-white/90">
                  <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2`}></i>
                  <span className="capitalize text-lg">{modalImage.category.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{modalImage.title}</h3>
                  <p className="text-neutral-600 capitalize flex items-center">
                    <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2 text-secondary`}></i>
                    {modalImage.category.replace('_', ' ')}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-eye mr-2"></i>
                  Gallery View
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
