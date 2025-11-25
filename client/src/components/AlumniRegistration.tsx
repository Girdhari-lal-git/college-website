import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AccessibilityFeatures } from './AccessibilityFeatures';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { uploadImageToCloudinarySecure } from '../lib/cloudinary';

const AlumniRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    photo: null as File | null,
    name: '',
    batch: '',
    fromCity: '',
    currentCity: '',
    companyName: '',
    position: '',
    email: '',
    phone: '',
    achievements: ''
  });

  // Typed input handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  // Typed upload function
  const uploadPhoto = async (file: File | null): Promise<string | null> => {
    if (!file) return null;

    try {
      toast({
        title: 'Uploading Image',
        description: 'Please wait while your image is uploading...',
      });

      const url = await uploadImageToCloudinarySecure(file);
      if (!url) throw new Error('Image upload failed');

      toast({
        title: 'Success',
        description: 'Photo uploaded successfully!',
      });

      return url;
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      toast({
        title: 'Upload Error',
        description: err.message,
        variant: 'destructive',
      });
      throw err;
    }
  };

  // Validation
  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.batch.trim()) errors.push('Batch year is required');
    if (!formData.fromCity.trim()) errors.push('Hometown is required');
    if (!formData.currentCity.trim()) errors.push('Current city is required');
    if (!formData.companyName.trim()) errors.push('Company name is required');
    if (!formData.position.trim()) errors.push('Position is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.phone.trim()) errors.push('Phone number is required');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Invalid email address');
    }

    return errors;
  };

  // Typed form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      toast({
        title: 'Validation Error',
        description: validationErrors.join(', '),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let photoUrl: string | null = null;

      if (formData.photo) {
        photoUrl = await uploadPhoto(formData.photo);
      }

      const alumniData = {
        name: formData.name.trim(),
        batch: formData.batch.trim(),
        fromCity: formData.fromCity.trim(),
        currentCity: formData.currentCity.trim(),
        companyName: formData.companyName.trim(),
        position: formData.position.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        ...(formData.achievements.trim() && {
          achievements: formData.achievements.trim(),
        }),
        ...(photoUrl && { photoUrl }),
      };

      const response = await fetch('/api/alumni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alumniData),
      });

      const text = await response.text();
      const json = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(json.message || json.error || 'Registration failed');
      }

      toast({
        title: 'Success!',
        description: 'Alumni registration submitted successfully!',
      });

      // Reset form
      setFormData({
        photo: null,
        name: '',
        batch: '',
        fromCity: '',
        currentCity: '',
        companyName: '',
        position: '',
        email: '',
        phone: '',
        achievements: '',
      });

      // Fix TS error for HTMLElement
      const fileInput = document.getElementById('photo') as HTMLInputElement | null;
      if (fileInput) fileInput.value = '';
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      toast({
        title: 'Registration Error',
        description: err.message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AccessibilityFeatures />
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-48">
        <nav aria-label="Breadcrumb" className="text-md">
          <ol className="flex items-left justify-left space-x-2">
            <li className="text-primary"><a href="/" className="hover:underline">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/alumni" className="text-primary hover:underline">Alumni</a></li>
            <li className="text-gray-400">/</li>
            <li aria-current="page" className="text-gray-500">Alumni Registration</li>
          </ol>
        </nav>

        <h1 className="text-6xl font-bold text-primary mb-4 text-center">Join Our Alumni Network</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          Connect with thousands of PIET graduates worldwide and be part of a strong alumni community.
        </p>
      </div>

      {/* Registration Form */}
      <Card className="max-w-6xl mx-auto mb-20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Alumni Registration Form</CardTitle>
          <CardDescription className="text-center">
            Fill out the form below to join the alumni network
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Photo */}
            <div className="space-y-2">
              <Label htmlFor="photo">Student Photo</Label>
              <Input id="photo" type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            {/* Batch */}
            <div className="space-y-2">
              <Label>Batch Year *</Label>
              <Select value={formData.batch} onValueChange={(value) => setFormData(prev => ({ ...prev, batch: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select batch year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 25 }, (_, i) => {
                    const year = 2025 - i;
                    return <SelectItem key={year} value={year.toString()}>{year}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Two-column Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="space-y-2">
                <Label>Hometown *</Label>
                <Input name="fromCity" value={formData.fromCity} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label>Current City *</Label>
                <Input name="currentCity" value={formData.currentCity} onChange={handleInputChange} required />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="space-y-2">
                <Label>Current Company *</Label>
                <Input name="companyName" value={formData.companyName} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label>Position *</Label>
                <Input name="position" value={formData.position} onChange={handleInputChange} required />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="space-y-2">
                <Label>Email *</Label>
                <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
              </div>

            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <Label>Notable Achievements</Label>
              <Textarea
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                className="min-h-[120px]"
                placeholder="Awards, achievements, publications, etc."
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <Button type="submit" disabled={isSubmitting} className="px-8 py-3 text-lg">
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus mr-2"></i> Register as Alumni
                  </>
                )}
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
};

export default AlumniRegistration;
