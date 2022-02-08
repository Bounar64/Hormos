<?php  

namespace App\Controller;

use App\Taxes\Calculator;
use Cocur\Slugify\Slugify;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HelloController extends AbstractController {
    
    /**
     * @Route("/hello/{name}", name="hello", methods={"GET", "POST"})
     */
    public function hello($name = "world", Calculator $calculator) {

        $slugify = new Slugify();

        dump($slugify->slugify("Hello World"));

        $tva = $calculator->calcul(100);

        dump($tva);

        return new Response("Hello $name");
    }
}