package com.example.oblig1web;

public class Ticket {
    private String innFilm;
    private int innAmount;
    private String innFName;
    private String innLName;
    private int innPhone;
    private String innEmail;

    public Ticket(String innFilm, int innAmount, String innFName, String innLName, int innPhone, String innEmail){
        this.innFilm = innFilm;
        this.innAmount = innAmount;
        this.innFName = innFName;
        this.innLName = innLName;
        this.innPhone = innPhone;
        this.innEmail = innEmail;
    }

    public Ticket(){}

    public String getFilm() {return innFilm;}
    public void setFilm(String innFilm){this.innFilm = innFilm;}

    public int getAmount() {return innAmount;}
    public void setAmount(int innAmount){this.innAmount = innAmount;}

    public String getFName() {return innFName;}
    public void setFName(String innFName){this.innFName = innFName;}

    public String getLName() {return innLName;}
    public void setLName(String innFName){this.innLName = innLName;}

    public int getPhone() {return innPhone;}
    public void setPhone(int innPhone){this.innPhone = innPhone;}

    public String getEmail() {return innEmail;}
    public void setEmail(String innEmail){this.innEmail = innEmail;}
}
