{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  interface ProfileUpdate {
    name?: string;
    age?: number;
    email?: string;
  }

  function updateProfile(profile: Profile, updates: ProfileUpdate): Profile {
    const updatedProfile = {
      ...profile,
      ...updates,
    };
    return updatedProfile;
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
