package com.example.oblig1web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {
    public final List<Ticket> ticketRegistry = new ArrayList<>();

    @PostMapping("/save")
    public void save(@RequestBody Ticket ticket){
        System.out.println("Save");
        System.out.println(ticket);
        ticketRegistry.add(ticket);
    }

    @GetMapping("/getAll")
    public List<Ticket> getAll() {
        System.out.println("Get");
        System.out.println(ticketRegistry);
        return ticketRegistry;
    }

    @GetMapping("/deleteAll")
    public void deleteAll(){
        System.out.println("Delete");
        System.out.println(ticketRegistry);
        ticketRegistry.clear();
    }
}
