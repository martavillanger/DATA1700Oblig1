package com.example.oblig1web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {
    public final List<Ticket> ticketRegistry = new ArrayList<>();

    @PostMapping("/save")
    public void save(Ticket ticket){
        ticketRegistry.add(ticket);
    }

    @GetMapping("/getAll")
    public List<Ticket> getAll() {
        return ticketRegistry;
    }

    @GetMapping("/deleteAll")
    public void deleteAll(){
        ticketRegistry.clear();
    }
}
