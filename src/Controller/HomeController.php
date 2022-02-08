<?php 

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {

    /**
     * @Route("/", name="homepage")
     */
    public function homepage() {

        $titles = ["Prêt-à-porter Femme", "Prêt-à-porter Homme", "Bijouterie Joaillerie", "Maquillage", "Accessoires Bijoux", "Ceinture", "Maroquinerie", "Chaussures"];
        
        return $this->render('home.html.twig', [
            'titles' => $titles
        ]);
    }
}