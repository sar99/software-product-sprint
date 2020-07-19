package com.google.sps.data;

/** Class for a single comment */
public final class Comment {

  private final long id;
  private final String comment;
  private final long timestamp;
  private final String email;

  public Comment(long id, String comment, long timestamp, String email) {
    this.id = id;
    this.comment = comment;
    this.timestamp = timestamp;
    this.email = email;
  }
}