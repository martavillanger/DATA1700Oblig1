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

    public String getinnFilm() {return innFilm;}
    public void setinnFilm(String innFilm){this.innFilm = innFilm;}

    public int getinnAmount() {return innAmount;}
    public void setinnAmount(int innAmount){this.innAmount = innAmount;}

    public String getinnFName() {return innFName;}
    public void setinnFName(String innFName){this.innFName = innFName;}

    public String getinnLName() {return innLName;}
    public void setinnLName(String innLName){this.innLName = innLName;}

    public int getinnPhone() {return innPhone;}
    public void setinnPhone(int innPhone){this.innPhone = innPhone;}

    public String getinnEmail() {return innEmail;}
    public void setinnEmail(String innEmail){this.innEmail = innEmail;}

    @Override
    public String toString() {
        return innFilm + ", " + innAmount + ", " + innFName + ", " +innLName + ", " +innPhone + ", " +innEmail;
    }
}
