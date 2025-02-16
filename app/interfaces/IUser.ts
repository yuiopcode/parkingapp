/*
UUID id,
    UUID userId,
    String profilePicture,
    String firstName,
    String lastName,
    String country,
    String city,
    String email,
    String phoneNumber,
    String phoneCode,
    LocalDate birthDate,
    boolean isEmailVerified,
    boolean isPhoneVerified,
    LocalDateTime creationDate,
    LocalDateTime modificationDate*/

export default interface IUser {
    userId: string;
    profilePicture: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    email: string;
    phoneNumber: string;
    phoneCode: string;
    birthDate: Date;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
};
