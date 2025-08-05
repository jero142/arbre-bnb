import { LuCircleParking, LuRefrigerator } from "react-icons/lu";
import { GiTv } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { PiHairDryerLight, PiFirstAidKitLight } from "react-icons/pi";
import { FiCoffee } from "react-icons/fi";

import thumbnailTreehouse1 from "/images/Breeze-Treehouse-by-The-Appleton-Retreat.jpg";
import thumbnailTreehouse2 from "/images/moon-treehouse-05.jpg";
import thumbnailTreehouse3 from "/images/LOVTAG_1.jpg";
import thumbnailTreehouse4 from "/images/Treeframe-2.jpg";
import thumbnailTreehouse5 from "/images/spherical-tree-houses-free-spirit-treehouse-1.jpg";

import Treehouse1image1 from "/images/Breeze-Treehouse-exterior-1.jpg";
import Treehouse1image2 from "/images/Breeze-Treehouse-exterior-2.jpg";
import Treehouse1image3 from "/images/Breeze-Treehouse-exterior-3.jpg";
import Treehouse1image4 from "/images/Breeze-Treehouse-exterior-4.jpg";
import Treehouse1image5 from "/images/Breeze-Treehouse-exterior-5.jpg";
import Treehouse1image6 from "/images/Breeze-Treehouse-interior-1.jpg";
import Treehouse1image7 from "/images/Breeze-Treehouse-interior-2.jpg";
import Treehouse1image8 from "/images/Breeze-Treehouse-interior-3.jpg";
import Treehouse1image9 from "/images/Breeze-Treehouse-kitchen-1.jpg";
import Treehouse1image10 from "/images/Breeze-Treehouse-outdoor.jpg";

import Treehouse2image2 from "/images/moon-treehouse-02.jpg";
import Treehouse2image3 from "/images/moon-treehouse-03.jpg";
import Treehouse2image4 from "/images/moon-treehouse-04.jpg";
import Treehouse2image5 from "/images/moon-treehouse-06.jpg";
import Treehouse2image6 from "/images/moon-treehouse-07.jpg";
import Treehouse2image7 from "/images/moon-treehouse-08.jpg";
import Treehouse2image8 from "/images/moon-treehouse-09.jpg";
import Treehouse2image9 from "/images/moon-treehouse-10.jpg";
import Treehouse2image10 from "/images/moon-treehouse-11.jpg";
import Treehouse2image11 from "/images/moon-treehouse-12.jpg";
import Treehouse2image12 from "/images/moon-treehouse-13.jpg";
import Treehouse2image13 from "/images/moon-treehouse-14.jpg";

import Treehouse3image1 from "/images/LOVTAG_2.jpg";
import Treehouse3image2 from "/images/LOVTAG_3.jpg";
import Treehouse3image3 from "/images/LOVTAG_4.jpg";
import Treehouse3image4 from "/images/LOVTAG_5.jpg"; 
import Treehouse3image5 from "/images/LOVTAG_6.jpg";
import Treehouse3image6 from "/images/LOVTAG_7.jpg";
import Treehouse3image7 from "/images/LOVTAG_8.jpg"; 

import Treehouse4image1 from "/images/Treeframe-1.jpg";
import Treehouse4image2 from "/images/Treeframe-3.jpg";
import Treehouse4image3 from "/images/Treeframe-4.jpg";
import Treehouse4image4 from "/images/Treeframe-5.jpg"; 
import Treehouse4image5 from "/images/Treeframe-6.jpg";


import Treehouse5image1 from "/images/spherical-tree-houses-free-spirit-treehouse-4.jpg";
import Treehouse5image2 from "/images/spherical-tree-houses-free-spirit-treehouse-3.jpg";
import Treehouse5image3 from "/images/spherical-tree-houses-free-spirit-treehouse-2.jpg";
import Treehouse5image4 from "/images/spherical-tree-houses-free-spirit-treehouse-5.jpg";
import Treehouse5image5 from "/images/spherical-tree-houses-free-spirit-treehouse-6.jpg";
import Treehouse5image6 from "/images/spherical-tree-houses-free-spirit-treehouse-7.jpg";

export const Treehouses = [
  {
    id: 1,
    name: "Breeze Treehouse",
    infos: "2 guests.1 bedroom.1 bed.1 bath",
    thumbnail: thumbnailTreehouse1,
    images: [Treehouse1image1, Treehouse1image2, Treehouse1image3, Treehouse1image4, Treehouse1image5, Treehouse1image6, Treehouse1image7, Treehouse1image8, Treehouse1image9, Treehouse1image10],
    priceByNight: 399,
    amenities: [
      { icon: <LuCircleParking />, label: "Free parking" },
      { icon: <GiTv />, label: "TV with standard cable" },
      { icon: <MdBalcony />, label: "Private patio or balcony" },
      { icon: <FaWifi />, label: "Wifi – 29 Mbps" },
      { icon: <PiHairDryerLight />, label: "Hair dryer" },
      { icon: <PiFirstAidKitLight />, label: "First aid kit" },
      { icon: <LuRefrigerator />, label: "Refrigerator" },
      { icon: <FiCoffee />, label: "Coffee" },
    ],
    slug: "breezeTreehouse",
  },
  {
    id: 2,
    name: "Half Moon Bay Treehouse",
    infos: "5 guests.1 bedroom.4 bed.1 bath",
    thumbnail: thumbnailTreehouse2,
    images: [Treehouse2image2, Treehouse2image3, Treehouse2image4, Treehouse2image5, Treehouse2image6, Treehouse2image7, Treehouse2image8, Treehouse2image9, Treehouse2image10, Treehouse2image11, Treehouse2image12, Treehouse2image13],
    priceByNight: 519,
    amenities: [
      { icon: <LuCircleParking />, label: "Free parking" },
      { icon: <GiTv />, label: "TV with standard cable" },
      { icon: <MdBalcony />, label: "Private patio or balcony" },
      { icon: <FaWifi />, label: "Wifi – 29 Mbps" },
      { icon: <PiHairDryerLight />, label: "Hair dryer" },
      { icon: <PiFirstAidKitLight />, label: "First aid kit" },
      { icon: <LuRefrigerator />, label: "Refrigerator" },
     
    ],
    slug: "moonTreehouse",
  },
  {
    id: 3,
    name: "Lovtag Treehouse",
    infos: "4 guests.1 bedroom.3 bed.1 bath",
    thumbnail: thumbnailTreehouse3,
    images: [Treehouse3image1, Treehouse3image2, Treehouse3image3, Treehouse3image4, Treehouse3image5, Treehouse3image6, Treehouse3image7],
    priceByNight: 649,
    amenities: [
      { icon: <LuCircleParking />, label: "Free parking" },
      { icon: <GiTv />, label: "TV with standard cable" },
      { icon: <MdBalcony />, label: "Private patio or balcony" },
      { icon: <FaWifi />, label: "Wifi – 29 Mbps" },
    
      { icon: <LuRefrigerator />, label: "Refrigerator" },
      { icon: <FiCoffee />, label: "Coffee" },
    ],
    slug: "lovtagTreehouse",
  },
  {
    id: 4,
    name: "Treeframe Treehouse",
    infos: "4 guests.2 bedroom.2 bed.1 bath",
    thumbnail: thumbnailTreehouse4,
    images: [Treehouse4image1, Treehouse4image2, Treehouse4image3, Treehouse4image4, Treehouse4image5],
    priceByNight: 379,
    amenities: [
      { icon: <LuCircleParking />, label: "Free parking" },
      { icon: <GiTv />, label: "TV with standard cable" },
      { icon: <MdBalcony />, label: "Private patio or balcony" },
      { icon: <FaWifi />, label: "Wifi – 29 Mbps" },
      { icon: <PiHairDryerLight />, label: "Hair dryer" },
      { icon: <PiFirstAidKitLight />, label: "First aid kit" },
      { icon: <LuRefrigerator />, label: "Refrigerator" },
      { icon: <FiCoffee />, label: "Coffee" },
    ],
    slug: "treeframeTreehouse",
  },
  {
    id: 5,
    name: "Spherical Treehouse",
    infos: "2 guests.1 bedroom.1 bed.1 bath",
    thumbnail: thumbnailTreehouse5,
    images: [Treehouse5image1, Treehouse5image2, Treehouse5image3, Treehouse5image4, Treehouse5image5, Treehouse5image6],
    priceByNight: 299,
    amenities: [
      { icon: <LuCircleParking />, label: "Free parking" },
      
      { icon: <FaWifi />, label: "Wifi – 29 Mbps" },
      { icon: <PiHairDryerLight />, label: "Hair dryer" },
      { icon: <PiFirstAidKitLight />, label: "First aid kit" },
      
    ],
    slug: "sphericalTreehouse",
  },
];