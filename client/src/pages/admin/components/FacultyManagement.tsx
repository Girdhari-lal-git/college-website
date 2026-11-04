import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2, Upload, X } from 'lucide-react';
import { uploadImageToCloudinarySecure } from '@/lib/cloudinary';

interface Faculty {
  _id: string;
  name: string;
  department: string;
  designation: string;
  gender: string;
  imageUrl?: string;
  email?: string;
  employeeId?: string;
  biography?: string;
  qualifications?: string[];
  experience?: string;
  teachingAreas?: string[];
  researchInterests?: string[];
  publications?: { title: string; year?: number; url?: string }[];
  awards?: string[];
  professionalMemberships?: string[];
  nptelCertifications?: string[];
  fdpsWorkshopsAttended?: string[];
  resourcePersonActivities?: string[];
  professionalLinks?: { label: string; url: string }[];
  createdAt: string;
}

const splitLines = (value: string) => value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);

export default function FacultyManagement() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    designation: '',
    gender: '',
    imageUrl: '',
    email: '',
    employeeId: '',
    biography: '',
    qualificationsText: '',
    experience: '',
    teachingAreasText: '',
    researchInterestsText: '',
    publicationsText: '',
    awardsText: '',
    professionalMembershipsText: '',
    nptelCertificationsText: '',
    fdpsWorkshopsAttendedText: '',
    resourcePersonActivitiesText: '',
    professionalLinksText: ''
  });

  useEffect(() => {
    loadFaculty();
  }, []);

  const loadFaculty = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/faculty', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setFaculty(data.data || []);
      }
    } catch (error) {
      console.error('Error loading faculty:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('admin_token');
      const url = editingFaculty 
        ? `/api/admin/faculty/${editingFaculty._id}`
        : '/api/admin/faculty';

      const method = editingFaculty ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          department: formData.department,
          designation: formData.designation,
          gender: formData.gender,
          imageUrl: formData.imageUrl,
          email: formData.email,
          employeeId: formData.employeeId,
          biography: formData.biography,
          experience: formData.experience,
          qualifications: splitLines(formData.qualificationsText),
          teachingAreas: splitLines(formData.teachingAreasText),
          researchInterests: splitLines(formData.researchInterestsText),
          awards: splitLines(formData.awardsText),
          professionalMemberships: splitLines(formData.professionalMembershipsText),
          nptelCertifications: splitLines(formData.nptelCertificationsText),
          fdpsWorkshopsAttended: splitLines(formData.fdpsWorkshopsAttendedText),
          resourcePersonActivities: splitLines(formData.resourcePersonActivitiesText),
          publications: splitLines(formData.publicationsText).map((line) => {
            const [title, year, url] = line.split('|').map((part) => part.trim());
            return { title, ...(year && !Number.isNaN(Number(year)) ? { year: Number(year) } : {}), ...(url ? { url } : {}) };
          }).filter((item) => item.title),
          professionalLinks: splitLines(formData.professionalLinksText).map((line) => {
            const [label, url] = line.split('|').map((part) => part.trim());
            return { label, url };
          }).filter((item) => item.label && item.url)
        })
      });

      if (response.ok) {
        await loadFaculty();
        setIsDialogOpen(false);
        resetForm();
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/admin/faculty/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await loadFaculty();
      }
    } catch (error) {
      console.error('Error deleting faculty:', error);
    }
  };

  const handleEdit = (facultyMember: Faculty) => {
    setEditingFaculty(facultyMember);
    setFormData({
      name: facultyMember.name,
      department: facultyMember.department,
      designation: facultyMember.designation,
      gender: facultyMember.gender,
      imageUrl: facultyMember.imageUrl || '',
      email: facultyMember.email || '',
      employeeId: facultyMember.employeeId || '',
      biography: facultyMember.biography || '',
      qualificationsText: (facultyMember.qualifications || []).join('\n'),
      experience: facultyMember.experience || '',
      teachingAreasText: (facultyMember.teachingAreas || []).join('\n'),
      researchInterestsText: (facultyMember.researchInterests || []).join('\n'),
      publicationsText: (facultyMember.publications || []).map((p) => [p.title, p.year ?? '', p.url ?? ''].join(' | ')).join('\n'),
      awardsText: (facultyMember.awards || []).join('\n'),
      professionalMembershipsText: (facultyMember.professionalMemberships || []).join('\n'),
      nptelCertificationsText: (facultyMember.nptelCertifications || []).join('\n'),
      fdpsWorkshopsAttendedText: (facultyMember.fdpsWorkshopsAttended || []).join('\n'),
      resourcePersonActivitiesText: (facultyMember.resourcePersonActivities || []).join('\n'),
      professionalLinksText: (facultyMember.professionalLinks || []).map((p) => `${p.label} | ${p.url}`).join('\n')
    });
    setSelectedImage(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      department: '',
      designation: '',
      gender: '',
      imageUrl: '',
      email: '',
      employeeId: '',
      biography: '',
      qualificationsText: '',
      experience: '',
      teachingAreasText: '',
      researchInterestsText: '',
      publicationsText: '',
      awardsText: '',
      professionalMembershipsText: '',
      nptelCertificationsText: '',
      fdpsWorkshopsAttendedText: '',
      resourcePersonActivitiesText: '',
      professionalLinksText: ''
    });
    setEditingFaculty(null);
    setError('');
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    setUploadingImage(true);
    try {
      const imageUrl = await uploadImageToCloudinarySecure(selectedImage);
      if (imageUrl) {
        setFormData(prev => ({ ...prev, imageUrl }));
        setSelectedImage(null);
        setImagePreview(null);
      } else {
        setError('Failed to upload image');
      }
    } catch (error) {
      setError('Error uploading image');
    } finally {
      setUploadingImage(false);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '' }));
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Faculty Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingFaculty ? 'Edit Faculty' : 'Add New Faculty'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Faculty name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Applied Science">Applied Science</SelectItem>
                    <SelectItem value="AI and Data Science">AI and Data Science</SelectItem>
                    <SelectItem value="Computer Engineering">Computer Engineering</SelectItem>
                    <SelectItem value="Internet of Things">Internet of Things</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                  placeholder="Professor, Associate Professor, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email ID</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="name@poornima.edu.in" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input id="employeeId" value={formData.employeeId} onChange={(e) => setFormData(prev => ({ ...prev, employeeId: e.target.value }))} placeholder="Employee ID" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select 
                  value={formData.gender} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="biography">Short Description / About</Label>
                <textarea id="biography" value={formData.biography} onChange={(e) => setFormData(prev => ({ ...prev, biography: e.target.value }))} placeholder="Write a verified faculty biography." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>             <div className="space-y-2">
                <Label htmlFor="experience">Teaching / Professional Experience</Label>
                <textarea id="experience" value={formData.experience} onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))} placeholder="e.g. 8 years in teaching and research." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>             <div className="space-y-2">
                <Label htmlFor="qualificationsText">Qualifications</Label>
                <textarea id="qualificationsText" value={formData.qualificationsText} onChange={(e) => setFormData(prev => ({ ...prev, qualificationsText: e.target.value }))} placeholder="One qualification per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>             <div className="space-y-2">
                <Label htmlFor="teachingAreasText">Teaching Subjects / Areas</Label>
                <textarea id="teachingAreasText" value={formData.teachingAreasText} onChange={(e) => setFormData(prev => ({ ...prev, teachingAreasText: e.target.value }))} placeholder="One subject or area per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>              <div className="space-y-2">
                <Label htmlFor="researchInterestsText">Research Areas of Interest</Label>
                <textarea id="researchInterestsText" value={formData.researchInterestsText} onChange={(e) => setFormData(prev => ({ ...prev, researchInterestsText: e.target.value }))} placeholder="One research interest per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>              <div className="space-y-2">
                <Label htmlFor="awardsText">Awards / Recognitions</Label>
                <textarea id="awardsText" value={formData.awardsText} onChange={(e) => setFormData(prev => ({ ...prev, awardsText: e.target.value }))} placeholder="One award per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>              <div className="space-y-2">
                <Label htmlFor="professionalMembershipsText">Professional Memberships</Label>
                <textarea id="professionalMembershipsText" value={formData.professionalMembershipsText} onChange={(e) => setFormData(prev => ({ ...prev, professionalMembershipsText: e.target.value }))} placeholder="One membership per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>              <div className="space-y-2">
                <Label htmlFor="nptelCertificationsText">NPTEL Certifications</Label>
                <textarea id="nptelCertificationsText" value={formData.nptelCertificationsText} onChange={(e) => setFormData(prev => ({ ...prev, nptelCertificationsText: e.target.value }))} placeholder="One certification per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>              <div className="space-y-2">
                <Label htmlFor="fdpsWorkshopsAttendedText">FDPs / Workshops Attended</Label>
                <textarea id="fdpsWorkshopsAttendedText" value={formData.fdpsWorkshopsAttendedText} onChange={(e) => setFormData(prev => ({ ...prev, fdpsWorkshopsAttendedText: e.target.value }))} placeholder="One FDP or workshop per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>             <div className="space-y-2">
                <Label htmlFor="resourcePersonActivitiesText">Resource Person / Talks</Label>
                <textarea id="resourcePersonActivitiesText" value={formData.resourcePersonActivitiesText} onChange={(e) => setFormData(prev => ({ ...prev, resourcePersonActivitiesText: e.target.value }))} placeholder="One activity or talk per line." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>             <div className="space-y-2">
                <Label htmlFor="publicationsText">Publications</Label>
                <textarea id="publicationsText" value={formData.publicationsText} onChange={(e) => setFormData(prev => ({ ...prev, publicationsText: e.target.value }))} placeholder="One per line: Title | Year | URL (year and URL optional)." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>            <div className="space-y-2">
                <Label htmlFor="professionalLinksText">Professional Profile Links</Label>
                <textarea id="professionalLinksText" value={formData.professionalLinksText} onChange={(e) => setFormData(prev => ({ ...prev, professionalLinksText: e.target.value }))} placeholder="One per line: Label | URL (e.g. Google Scholar | https://...)." rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>            <div className="space-y-2">
                <Label>Faculty Image (Optional)</Label>
                {formData.imageUrl ? (
                  <div className="space-y-2">
                    <div className="relative inline-block">
                      <img 
                        src={formData.imageUrl} 
                        alt="Faculty Preview" 
                        className="w-32 h-32 object-cover rounded-lg border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                        onClick={removeImage}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Image uploaded successfully</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {imagePreview ? (
                      <div className="space-y-2">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-32 h-32 object-cover rounded-lg border"
                        />
                        <div className="flex space-x-2">
                          <Button
                            type="button"
                            onClick={handleImageUpload}
                            disabled={uploadingImage}
                            size="sm"
                          >
                            {uploadingImage ? 'Uploading...' : 'Upload Image'}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setSelectedImage(null);
                              setImagePreview(null);
                            }}
                            size="sm"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <Label htmlFor="image-upload" className="cursor-pointer">
                            <span className="mt-2 block text-sm font-medium text-gray-900">
                              Click to upload faculty image
                            </span>
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              onChange={handleImageSelect}
                              className="sr-only"
                            />
                          </Label>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : editingFaculty ? 'Update' : 'Add'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faculty.map((faculty) => (
              <TableRow key={faculty._id}>
                <TableCell>
                  {faculty.imageUrl ? (
                    <img 
                      src={faculty.imageUrl} 
                      alt={faculty.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-500">No Image</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{faculty.name}</TableCell>
                <TableCell>{faculty.department}</TableCell>
                <TableCell>{faculty.designation}</TableCell>
                <TableCell>{faculty.gender}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleEdit(faculty)}
                      variant="outline"
                      size="sm"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(faculty._id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {faculty.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  No faculty members found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}